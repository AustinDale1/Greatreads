import React, {useState, useEffect} from 'react'


const Explore = () => {

    const [search, setSearch] = useState("")
    const [isSearched, setIsSearched] = useState(false)
    const [booksList, setBooksList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSearched(true)
        console.log("hi")
        console.log(search)
        getBooks()
    }

    const handleChange = (value) => {
        let tempSearch = search
        tempSearch = value
        setSearch(tempSearch)
    }

    const getBooks = async (e) => {
        let response = await fetch(`https://openlibrary.org/search.json?q=${search}`)
        let data = await response.json()
        let tempBooksArr = []
        console.log("WHEEEEEEE")
        console.log(data.docs[0])
        for(let i = 0; i < 10; i++){
            tempBooksArr[i] = data.docs[0].id_better_world_books[i]
        }
        setBooksList(tempBooksArr)
    }

    return (
        <div className='explorePage'>
            <div className='searchBox'>
            <form onSubmit={handleSubmit} className='loginForm'>
                <label className='passwordBox'>
                    <input 
                        type="text" 
                        name="password" 
                        placeholder="search"
                        onChange={(e) => {handleChange(e.target.value)}}
                    />
                    </label>
                    <input type="submit" />
            </form>
            </div>
            {isSearched?
                <div>
                    {booksList.map((book, index) => (
                    <div key={index}>
                        <div>{book}</div>

                    </div>
                ))}
                </div> : <></>
            }
        </div>
    )
}

export default Explore