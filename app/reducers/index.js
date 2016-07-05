import { combineReducers } from 'redux'

import page from './page'
import user from './user'
import post from './posts'
import days from './days'

export default combineReducers({
  page,
  user,
  post,
  days

})
