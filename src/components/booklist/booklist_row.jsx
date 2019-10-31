import React from 'react'
import { NavLink } from "react-router-dom";

const Row = ({member}) => {
  return (
    <NavLink
    to={`/${member.id}/details`}
    className='booklist__row'
    key={member.id}
  >
    <div>{member.first_name}</div>
    <div>{member.last_name}</div>
    <div>{member.short_title}</div>
    <div>{member.title}</div>
    <div>{member.state_rank}</div>
    <div>{member.phone}</div>
  </NavLink>
  )
}

export default Row