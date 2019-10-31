import React from 'react'
import SearchBar from './searchbar'

const AdvancedSearchBar = ({showAdvanceSearch, membersKeys, onSearch, setSearchKey, toggleAdvancedSearchbar}) => {
  return (
      <div className='searchbar'>
        <SearchBar onChange={onSearch}/>
        { showAdvanceSearch 
          && 
          <div>
            <select className='searchbar__select' id="params" onChange={(event) => setSearchKey(event)}>
              <option key={'all'} value={''}>Search All</option>
              {Object.keys(membersKeys).map(key => {
                return <option key={key} value={key}>{key}</option>
              })}
            </select> 
          </div>
        }
        <button className='searchbar__button' onClick={() => toggleAdvancedSearchbar()}>Advanced Search</button>
      </div>
    )
}

export default AdvancedSearchBar
