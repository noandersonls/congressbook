import React from 'react'

const SearchBar = ({value, onChange}) => {
  return (
    <div>
          <input placeholder='Search here...' value={value} onChange={(event) => onChange(event)} />
    </div>
    )
}

export default SearchBar