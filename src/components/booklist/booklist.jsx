import React, { Component } from 'react'
import { getAllCongressMembers } from '../../api'
import AdvancedSearchBar from '../searchbar/advanced_searchbar'
import Paginator from '../paginator/paginator'
import Row from './booklist_row'


export default class Booklist extends Component {
    constructor(props) {
    super(props)
    this.state = {
      data: {
        members: []
      },
      list: [],
      currentPage: 1,
      membersPerPage: 7,
      showAdvanceSearch: false,
      searchKey: ''
    }
  }

  componentDidMount() {
    getAllCongressMembers(115, 'senate')
      .then(data => {
        this.setData(data)
      })
  }

  setData = (data) => {
    const { results } = data.data
    this.setState({ data: results[0], list: results[0].members})
  }

  onSearch = (event) => {
    const { searchKey } = this.state

    let { members } = this.state.data
    members = members.filter(member => {
      if (Object.keys(member).find(key => {
        const filter = searchKey || key
        if(typeof member[filter] === 'string') {
          if (member[filter].includes(event.target.value)) {
            return true
          }
        }
        return false
      })) {
        return member
      }
      return null
    })
    this.setState({list: members});
  }

  toggleAdvancedSearchbar = () => {
    const { showAdvanceSearch } = this.state
    this.setState({
      showAdvanceSearch: !showAdvanceSearch
    });
  }

  setSearchKey = (event) => {
    const { value } = event.target
    this.setState({
      searchKey: value
    });
  }


  handlePagination = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


  handleNextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  }

  handlePreviousPage = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  }

  render () {
    const { list, currentPage, membersPerPage, showAdvanceSearch, data} = this.state
    const indexOfLastMember = currentPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    const currentMembers = list.slice(indexOfFirstMember, indexOfLastMember);

    const membersKeys = data.members[0] || []

    const renderRows = currentMembers.map((member, index) => {
      return <Row key={member.id} member={member} />
    });

    return (
          <div className='booklist'>
            <AdvancedSearchBar
              showAdvanceSearch={showAdvanceSearch}
              membersKeys={membersKeys}
              setSearchKey={this.setSearchKey}
              onSearch={this.onSearch}
              toggleAdvancedSearchbar={this.toggleAdvancedSearchbar}
            />
            <div className="booklist__header">
              <div>First Name</div>
              <div>Last Name</div>
              <div>Short Title</div>
              <div>Title</div>
              <div>State Rank</div>
              <div>Phone Number</div>
            </div>
            { list.length === 0 
              ? 
              <div>COMPONENTE VACIO DE CARGA</div>
              :
              <div>
                <div className="booklist__body">
                {renderRows}
                </div>
                <div>
                  <Paginator 
                    currentPage={currentPage}
                    handleNextPage={this.handleNextPage} 
                    handlePreviousPage={this.handlePreviousPage}
                    onClick={this.handlePagination}
                    membersPerPage={membersPerPage}
                    list={list}
                  />
                </div>
              </div>
            }
          </div>
    )
  }
}
