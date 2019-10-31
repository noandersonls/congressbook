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
    <button className='paginator__button' disabled={isFirstPage} onClick={() => handlePreviousPage()}>Previous</button>
      {pageNumbers.map(number => {
        return (
          <div
            key={number}
            id={number}
            className={'paginator__page ' + (number === currentPage ? 'paginator__page--active' : null)}
            onClick={(event) => onClick(event)}
          >
            {number}
          </div>
        );
      })}
      <button className='paginator__button' disabled={isLastPage} onClick={() => handleNextPage()} >Next</button>
    </div>
  )
}

export default Paginator