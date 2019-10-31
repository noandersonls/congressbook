import React, { Component } from 'react'
import { getCongressMembers } from '../../api'
import SearchBar from '../searchbar/searchbar.jsx'
import Paginator from '../paginator/paginator.jsx'
import Row from './booklist_row.jsx'


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
      showAdvanceSearch: false
    }
  }

  componentDidMount() {
    getCongressMembers(115, 'senate')
      .then(data => {
        this.saveData(data)
      })
  }

  saveData = (data) => {
    this.setState({ data: data.data.results[0], list: data.data.results[0].members})
  }

  onSearch = (event) => {
    // ADvance searchbar -> flag
    //Select 
    let { members } = this.state.data

    members = members.filter(member => {
      if (Object.keys(member).find(key => {
        if(typeof member[key] === 'string') {
          if (member[key].includes(event.target.value)) {
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
    const { list, currentPage, membersPerPage, showAdvanceSearch} = this.state

    const indexOfLastMember = currentPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    const currentMembers = list.slice(indexOfFirstMember, indexOfLastMember);

    const renderRows = currentMembers.map((member, index) => {
      return <Row key={member.id} member={member} />
    });

    console.log(this.state)
    return (
      <div className='booklist'>
        <div className='booklist__container'>
          <div className='booklist__table'>
            <SearchBar onChange={this.onSearch}/>
            <button onClick={() => console.log('LoL')}>HERE</button>
            {showAdvanceSearch && <div>Hello, ADVANCESEARCH </div>}
              <div className="booklist__table-header">
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
                  <div className="booklist__table--body">
                  {renderRows}
                  </div>
                  <div>
                    <Paginator 
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
        </div>
      </div>
    )
  }
}
