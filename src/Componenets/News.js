import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';


export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
  }

 
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    } 

    async updateNews() {

      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=9cddd5760b3444c18ad08ebe5cdfa885&page=${this.state.page}&pageSize=${this.props.pageSize}`;

      this.setState({loading: true})

      let data = await fetch(url);

      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({articles : parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,

      })

    }


    async componentDidMount() {
      this.updateNews();
    }



    handlePrevClick = async () => {
      this.setState({page: this.state.page  - 1});
      this.updateNews();
    }



    handleNextClick = async () => {
      this.setState({page: this.state.page  + 1});
      this.updateNews();

    }


  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>Stellar Update - Top Headlines</h2>

        {this.state.loading && <Spinner />}

        <div className='row'>

          {!this.state.loading && this.state.articles.map((element) => {
              return <div className='col-12 col-md-4' style={{}} key = {element.url}>
              <NewsItem title = {element.title ? element.title : ""} description = {element.description ? element.description.slice(0, 88) : ""} imageUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name} />
            </div>
                      
          })}

        </div>


        {!this.state.loading && 
        
        <div className='container d-flex justify-content-between'>
          <button disabled = {this.state.page === 1} className='btn btn-dark mb-3' onClick={this.handlePrevClick}>&#x2190;&nbsp; Previous</button>

          <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className='btn btn-dark next mb-3' onClick={this.handleNextClick}>Next&nbsp; &#x2192;</button>

        </div>
        }


      </div>
    )
  }
}
