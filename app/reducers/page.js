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

import photos from '../data/photos';

const initialState = {
  year: 2016,
  photos: photos,
  fetching: false,
  count: 5,
  photoId: '',
  condition: false
}

export default function page(state = initialState, action) {
  switch (action.type) {
    //отправили запрос на получение данныч
    case GET_PHOTOS_REQUEST :
    return { ...state, photos: photos.filter( (photo, index) => ( photo.year == action.payload ) ? photo : null ), year: action.payload, fetching: true }
      //return { ...state, year: action.payload, fetching: true  }
    //получили данные
    case GET_PHOTOS_SUCCESS :
      return { ...state,  fetching: false  }

    //отправили запрос на получение данныч
    case GET_MORE_PHOTOS_REQUEST :
      return { ...state,  fetching: true, count: state.count = state.count+5   }
    //получили данные
    case GET_MORE_PHOTOS_SUCCESS :
      return { ...state,  fetching: false  }

      //отправили запрос на получение данныч
      case GET_PHOTO_INFO_REQUEST :
        return { ...state,  fetching: true, photoId: action.payload, condition: false    }
      //получили данные
      case GET_PHOTO_INFO_SUCCESS :
        return { ...state,  fetching: false  }

      case ADD_LIKE :
        console.log( action.payload +"  "+ action.type )
        const i = action.payload
        return { ...state,  photos: state.photos.map( (photo, index) => (index == i ) ?  { ...photo, likes: photo.likes + 1  } :  photo ) }


      case TOGGLE_CLASS :
        console.log( state.condition + '' + TOGGLE_CLASS )
        return { ...state, condition: !state.condition  }

    default:
      return state;

  }

}

// function addNewArg (photo, property) {
//   for ( let key in  photo ) {
//     if ( key == property ) {
//       photo.property = photo[property]
//     }
//   }
// }
