import React, {useState, useEffect} from 'react'
import { useParams, useLocation} from 'react-router-dom';


const BookPage = () => {
    const [isRetrieved, setIsRetrieved] = useState(false)
    const [book, setBook] = useState({})
    let params = useParams()
    console.log("Test")
    console.log(params)
    let { id } = useLocation()
    console.log("Bookpage")
    console.log(id)
    console.log(id)

    const getBook = async (e) => {
        let response = await fetch(`https://openlibrary.org/works/${params.key}.json`)
        let data = await response.json()
        setBook(data)
        setIsRetrieved(true)
    }

    if(!isRetrieved) {
        getBook()
    }


    return (
        <div>
            <h1>Bookpage</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {isRetrieved? 
 
                <div>
                    {console.log(book)}
                    <h1>{book.title}</h1>
                    {console.log(book.authors[0].author)}
                    <h2>{book.authors[0].author.key}</h2>
                    <p>{book.description}</p>
                </div> : <></>}

        </div>
    )
}

export default BookPage