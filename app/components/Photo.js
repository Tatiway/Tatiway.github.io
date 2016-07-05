import React, { Component } from 'react'


export default class Photo extends Component {


  render(){
    const { photo, getPhotoInfo, addLike, index } = this.props

    return (
      <li className="photo__item" >
        <div className="photo__image" onClick={()=> getPhotoInfo(photo.code)} style={ {backgroundImage: `url(${ photo.display_src })` } }></div>
        <div className="photo__year">{photo.year}</div>
        <div className="photo__name">{photo.caption}</div>
        <button onClick={ ()=> addLike(index) }   className="photo__likes"> Likes &hearts;{photo.likes}</button>
      </li>
    )
  }
}
