# news_app
使用者可以瀏覽最新最熱門的新聞，包括體育，娛樂，政治，財經

# 系統技術
1. react.js
2. axios
3. Api connect

# 程式說明
透過axios協定獲取request, 
axios.get('api_url')

將response傳來的json格式資料，轉變為使用喜愛頁面。

以其中一個components 為例
```
import React from 'react'
import axios from 'axios'
import {useState, useEffect } from 'react'

function Entertainment() {
    const [articles, setArticles] = useState([])

    try{
      useEffect(() => {
        const getArticles = async ()=>{
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${process.env.REACT_APP_SECRET_NAME}`)
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

export default Entertainment
```


# 娛樂新聞
![](https://i.imgur.com/1WvBGPl.jpg)

體育
![](https://i.imgur.com/1XcCnsU.jpg)
政治
![](https://i.imgur.com/SVuPBsG.jpg)

財經
![](https://i.imgur.com/MAJsajk.jpg)
