import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_MORE_PHOTOS_SUCCESS,
  GET_MORE_PHOTOS_REQUEST,
  GET_PHOTO_INFO_REQUEST,
  GET_PHOTO_INFO_SUCCESS,
  ADD_LIKE,
  TOGGLE_CLASS
 } from '../constans/Page'

 export function toggleClass(){

   return (dispatch) => {

     dispatch({
       type: TOGGLE_CLASS
     })
   }
 }

 export function addLike(index){

   return (dispatch) => {

     dispatch({
       type: ADD_LIKE,
       payload: index
     })

   }
 }

 export function getPhotoInfo (photoId){

   return (dispatch) => {

     dispatch({
       type: GET_PHOTO_INFO_REQUEST,
       payload: photoId
     })
     setTimeout(() => {

       dispatch({
         type: GET_PHOTO_INFO_SUCCESS
       })
     }, 1000)
   }
 }

 export function getMorePhotos() {

   return (dispatch) => {

     dispatch({
       type: GET_MORE_PHOTOS_REQUEST,
     })
     setTimeout(() => {

       dispatch({
         type: GET_MORE_PHOTOS_SUCCESS
       })
     }, 2000)
   }
 }

export function getPhotos(year) {

  return (dispatch) => {

    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    })

    setTimeout(() => {

      dispatch({
        type: GET_PHOTOS_SUCCESS,
      })
    }, 1000)
  }
}
