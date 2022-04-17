import React from 'react'
import axios from 'axios'
import {useState, useEffect } from 'react'

function Home() {
    const [articles, setArticles] = useState([])

    try{
      useEffect(() => {
        const getArticles = async ()=>{
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=${process.env.REACT_APP_SECRET_NAME}`)
        setArticles(response.data.articles)
        console.log(response)
       }
       getArticles()
     }, [])
    }catch(error){
      console.log(error);
    }
  return (
    <div>
     {articles.map(article => {
       return (
        <div class="row no-gutters bg-light position-relative">
        <div class="col-md-6 mb-md-0 p-md-4">
          <img src={article.urlToImage} class="w-100" alt={article.title} /> 
        </div>
        <div class="col-md-6 position-static p-4 pl-md-0">
          <h5 class="mt-0">{article.title}</h5>
          <p>{article.description}</p>
          <a href={article.url} class="btn btn-primary stretched-link">Go to details</a>
        </div>
      </div>
         )
     })}
    </div>
  )
}
export default Home