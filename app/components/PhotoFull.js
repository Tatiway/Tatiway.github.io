import React, { Component } from 'react'


export default class PhotoFull extends Component {
  render() {
    const { photo, toggleClass, condition } = this.props
    return(
      <div className={ condition ? "photo-full photo-full--active" : "photo-full"}>
        <div className="photo-full__container" >
          <div  onClick={()=> toggleClass() }  className="photo-full__overlay"></div>
          <div className="photo-full__image" style={ {backgroundImage: `url(${ photo.display_src })` } }></div>
          <div className="photo-full__year">year: {photo.year}</div>
          <div className="photo-full__code">code: {photo.code}</div>
          <div className="photo-full__name">{photo.caption}</div>
          <div className="photo-full__likes">likes: {photo.likes}</div>
        </div>
      </div>
    )
  }
}

// <div className={condition ? "photo-full__container photo-full__container--active" : " photo-full__container " }>
