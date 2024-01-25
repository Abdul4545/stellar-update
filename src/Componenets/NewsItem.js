import React, { Component } from 'react'


export default class NewsItem extends Component {
    
  render() {

    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;

    return (
      <div className='my-3'>
        
        <div className="card" >

            <img src = {!imageUrl ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/breaking_latest_news_1200x675_1-sixteen_nine_734.jpg?VersionId=RK1VlYGRRL8Kzwp44xce_Q9w2mmoQuJ7" : imageUrl } className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}
                </h5>
                <p className="card-text">{description}...</p>
                <p className='card-text'><small className='text-muted'>By {author ? author : "Unknown"} on {new Date(date).toGMTString()} </small></p>
                <a href = {newsUrl} target = "_blank" rel="noreferrer"className="btn btn-sm btn btn-dark me-2">Read More</a>
                <span class="my-1 p-2 badge bg-success">
                      Source : {source}
                  </span>
            </div>
        </div>

      </div>
    )
  }
}
