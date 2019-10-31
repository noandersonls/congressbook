import React from 'react'

const Paginator = ({membersPerPage, currentPage, list, onClick, handleNextPage, handlePreviousPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(list.length / membersPerPage); i++) {
    pageNumbers.push(i);
  }

  const isLastPage = currentPage === pageNumbers.length
  const isFirstPage = currentPage === 1

  return (
    <div className='paginator'>
    <button disabled={isFirstPage} onClick={() => handlePreviousPage()}>Previous Page</button>
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
      <button disabled={isLastPage} onClick={() => handleNextPage()} >Next Page</button>
    </div>
  )
}

export default Paginator