import React from 'react'

const SearchBar = ({value, onChange}) => {
  return (
    <div>
          <input placeholder='Buscar un miembro...' value={value} onChange={(event) => onChange(event)} />
    </div>
    )
}

export default SearchBar