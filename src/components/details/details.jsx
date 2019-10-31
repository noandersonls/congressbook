import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { getCongressMember } from '../../api'
import DetailsItem from './details_item'

export default class Details extends Component {
  _isMounted = false
  constructor(props) {
    super(props)
    this.state = {
      member: {},
    }
  }

  componentDidMount() {
    this._isMounted = true;

    const { id } = this.props.match.params
    getCongressMember(id)
      .then(data => {
        if (this._isMounted) {
          this.setMember(data.data.results[0])
        }
      })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  setMember = (member) => {
    this.setState({ member })
  }

  isEmpty = (obj) => {
    return !obj || Object.keys(obj).length === 0;
  }


  render () {
    const { member } = this.state

    const loaded = member.member_id ? true : false

    return(
      <React.Fragment>
        <NavLink
            to={'/'}
            className='details__button'
            key={member.id}
        >
          Go Back!
        </NavLink>
        <div className='details'>
          <div className='details__title'>
            <DetailsItem title='Congressman' loaded={loaded} value={`${member.first_name} ${member.last_name}`}/>
          </div>
          <div className='details__body'>
            <DetailsItem title='Date of Birth' loaded={loaded} value={member.date_of_birth}/>
            <DetailsItem title='Gender' loaded={loaded} value={member.gender}/>
            <DetailsItem title='Facebook Account' loaded={loaded} value={member.facebook_account}/>
            <DetailsItem title='Twitter Account' loaded={loaded} value={member.twitter_account}/>
            <DetailsItem title='Current Party' loaded={loaded} value={member.current_party}/>
          </div>
          <div className='details__footer'>
            <span>You can see more in: </span>
            <a href={member.url} target='_blank' rel="noopener noreferrer" >Personal Member Website</a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
