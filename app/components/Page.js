import React, { PropTypes, Component } from 'react'
import Photo from './Photo'
import Loader from './Loader'
import PhotoFull from './PhotoFull'

export default class Page extends Component {



  showMore() {
    this.props.getMorePhotos()
  }
  onYearBtnClick(e){
    this.props.getPhotos(+e.target.innerText)
  }

  render() {
    const {  year, photos, fetching, count, photoId, condition } = this.props
    const years = [ 2014, 2015, 2016 ]


    return (

        <div className="page__container">

          <h2 className="logo">ReduxGram</h2>
          <div className="filter">
            {years.map( (item, index) => <button className="filter__buttons" onClick={this.onYearBtnClick.bind(this)} key={index}>{item}</button> )}
          </div>

        {
          fetching ?
            <Loader></Loader>
          :
          <div className="photo">
          <p className="photo__count">Всего {photos.length}  фото.</p>
            <div className="photo__container">
              <div className="photo__left">

                <ul className="photo__list">
                  {photos.map( (photo, index ) => (index < count ) ? <Photo getPhotoInfo={this.props.getPhotoInfo} addLike={this.props.addLike}   photo={photo} key={index} index={index}  ></Photo> : null )}
                </ul>
                <button className="photo__button"  onClick={this.showMore.bind(this)}>Show more</button>
              </div>
              <div className="photo__right">
                <div>{photos.map( (photo, index ) => (photo.code ==  photoId ) ? <PhotoFull toggleClass={this.props.toggleClass} photo={photo} key={index} condition={condition} ></PhotoFull> : null )}  </div>
              </div>
            </div>
          </div>
        }

        </div>


    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired
}

// {
//
//   photos.map( (photo, index, photos ) => ( year == photo.year ) ?
//   <Photo photo={photo} key={index} i={index}></Photo>
//   : null
// )
//
// }

// fetching
