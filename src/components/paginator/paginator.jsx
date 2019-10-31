import React from 'react'

const Paginator = ({membersPerPage, list, onClick, handleNextPage, handlePreviousPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(list.length / membersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='paginator'>
    <div onClick={() => handlePreviousPage()}>Previous Page</div>
      {pageNumbers.map(number => {
        return (
          <div
            key={number}
            id={number}
            onClick={(event) => onClick(event)}
          >
            {number}
          </div>
        );
      })}
      <div onClick={() => handleNextPage()} >Next Page</div>
    </div>
  )
}

export default Paginator