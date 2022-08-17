import React from 'react'

const SearchItem = ({ search, setSearch }) => {
    return (
        <form className='searchForm'
            onSubmit={(e) => e.preventDefault}>
            <label htmlFor="search">
                Search
            </label>
            <input type="text"
                name="search"
                placeholder='Search Item'
                id="search"
                role='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)} />

        </form>
    )
}

export default SearchItem