import {combineReducers} from 'redux'

import postsReducer from './postsReducer'


const rootReducer = combineReducers({
  pots: postsReducer
})


export default rootReducer
