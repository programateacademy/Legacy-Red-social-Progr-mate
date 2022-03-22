import React, {useState, useEffect} from 'react'

const Searcher =({typeOfSearch, filter}) => {
    const [search, setSearch] = useState("")
    useEffect(() => {
        filter(search)
    }, [search])
    const handleChange = ({target}) => {
        setSearch(target.value)
    }
    return (
        <input type="text" placeholder={typeOfSearch} value={search} onChange={handleChange}/>
    )
}

export default Searcher