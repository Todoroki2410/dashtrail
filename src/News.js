import React, { useState } from 'react'
import axios from 'axios'
import Dashboard from './Dashboard'
function News() {

  const [news, setNews] = useState([])

  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }
  return (
    <Dashboard>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className='btn btn-warning' id='head_news' onClick={fetchNews}>Latest News</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            news.map((value,index) => {
              return (
                <div key={index} className="col-4">
                  <div className="card" style={{ width: "20rem", margin: "5px" }}>
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a className="btn btn-primary" onClick={() => window.open(value.url)}>Read More &#187;</a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
      </Dashboard>
  );
}

export default News;