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

    console.log(this.isEmpty(member))
    console.log(this.state)
        
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
            <p>{`${member.first_name} ${member.last_name}`}</p>
          </div>
          <div className='details__body'>
            <DetailsItem title='Date of Birth' value={member.date_of_birth}/>
            <div><b>Date of Birth: </b>{member.date_of_birth}</div>
            <div><b>Gender: </b> {member.gender}</div>
            <div><b>Facebook Account: </b>{member.facebook_account}</div>
            <div><b>Twitter Account: @</b>{member.twitter_account}</div>
            <div><b>Current Party: </b>{member.current_party}</div>
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
