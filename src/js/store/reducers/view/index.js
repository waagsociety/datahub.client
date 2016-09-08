import * as initialState from './initialise'

export default function(state = initialState, { type, payload }) {

  switch(type){

    case 'view-SearchInput': {
      const SearchInput = { ...state.SearchInput, ...payload }
      return { ...state, SearchInput }
    }

    default: return { ...state }

  }
  
}