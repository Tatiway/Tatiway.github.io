import React, { PropTypes, Component } from 'react'

export default class Loader extends Component {


  render () {
    return (
      <div className='loader'>
        <div className='loader__container'>
          <span></span><span></span><span></span><span></span>
        </div>
      </div>
    )
  }
}
