import React, { useState } from 'react'
import axios from 'axios'

function Search() {
    const [question, setquestion] = useState('')
    const questionHandler = (e)=>{
        setquestion(e.target.value)
    }
    const searchHandler = (e)=>{
        e.preventDefault()
        setquestion('')
    }

    axios.post('http://localhost:3000/api/query',{
    quest: setquestion,
})
    .then( (response) => console.log(response)
    )
    .catch( (error) => console.log(error))

  return (
    <div class="input-group">
    <input value={question} onChange={questionHandler} type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
    <button type="button" class="btn btn-outline-primary" onClick={searchHandler}>search</button>
  </div>
  )
}

export default Search