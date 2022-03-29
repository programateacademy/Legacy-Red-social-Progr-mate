import React, {useState, useEffect} from 'react'
import styles from './Searcher.module.css'
let keys = ['email', 'cohorte']

const Searcher =({typeOfSearch, setFilter, dataToFilter, objectKey}) => {
    
    
    const filter = (toSearch) => {
        let userToSet = dataToFilter.filter((users) => {
            if (users[objectKey].toString().toLowerCase().includes(toSearch.toLowerCase())){
            return users
        }})
        setFilter(userToSet)
        // setFilterUser(userToSet)
    }

    const [search, setSearch] = useState("")
    useEffect(() => {
        filter(search)
    }, [search])
    const handleChange = ({target}) => {
        setSearch(target.value)
    }
    return (
        <input className={styles.input} type="text" placeholder={typeOfSearch} value={search} onChange={handleChange}/>
    )
}

export default Searcher