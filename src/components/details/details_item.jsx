import React from 'react'

const DetailsItem = ({title, value, loaded}) => {
  const showValue = loaded ? <b>{`${value}`}</b> : <div className="details__loading" />;
  return (
    <div><b>{title}: </b>{showValue}</div>
  )
}

export default DetailsItem