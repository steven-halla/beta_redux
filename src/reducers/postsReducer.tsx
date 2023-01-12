import * as actions from '../actions/postsActions'


export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
}



export default function postsReducer (state = initialState, action: { type: any }) {
  switch (action.type) {
    default:
      return state
  }
}

case actions.GET_POSTS:
return { ...state, loading: true }
