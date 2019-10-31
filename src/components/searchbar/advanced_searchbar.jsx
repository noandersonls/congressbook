import React from 'react'
import SearchBar from './searchbar'

const AdvancedSearchBar = ({showAdvanceSearch, membersKeys, onSearch, setSearchKey, toggleAdvancedSearchbar}) => {
  return (
      <div className='Searchbar__container'>
        <SearchBar onChange={onSearch}/>
        { showAdvanceSearch 
          && 
          <div>
            <select id="params" onChange={(event) => setSearchKey(event)}>
              <option key={'all'} value={''}>Search All</option>
              {Object.keys(membersKeys).map(key => {
                return <option key={key} value={key}>{key}</option>
              })}
            </select> 
          </div>
        }
        <button onClick={() => toggleAdvancedSearchbar()}>Show Searchbar Filters</button>
      </div>
    )
}

export default AdvancedSearchBar
