import React, {useState, useEffect} from 'react'
import Book from '../components/Book';
import {Link} from 'react-router-dom';


const Explore = () => {

    const [search, setSearch] = useState("")
    const [isSearched, setIsSearched] = useState(false)
    const [booksList, setBooksList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(search === ""){
            return
        }
        setIsSearched(true)
        getBooks()
    }

    const handleChange = (value) => {
        let tempSearch = search
        tempSearch = value
        setSearch(tempSearch)
    }

    const getBooks = async (e) => {
        let response = await fetch(`https://openlibrary.org/search.json?q=${search}&fields=key,title,author_name,editions`)
        let data = await response.json()
        let tempBooksArr = []
        console.log(data.docs[0].title)
        for(let i = 0; i < 10; i++){
            tempBooksArr[i] = data.docs[i]
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
                <div className='searchResults'>
                    {booksList.map((book, index) => (
                    <div key={index} className='searchResults'>
                        {console.log("Here")}
                        {console.log(book)}
                        <Link to={`/BookPage${book.key}`}>
                            <Book book={book}/>
                        </Link>
                    </div>
                ))}
                </div> : <></>
            }
        </div>
    )
}

export default Explore