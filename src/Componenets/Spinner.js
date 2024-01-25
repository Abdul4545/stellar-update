import React, { Component } from 'react'
import loading_icon from './loading-4.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='container'>
        <div className='text-center'>
            <img src = {loading_icon} alt='loading...' style={{width: "100px", marginTop: "20%"}} className='align-middle'/>
        </div>
      </div>
    )
  }
}
