import React from 'react'
import { Feedback } from '../'
import { eventHandlers } from './events'

export default function SearchTag({ props }) {
  
  const { store } = props
  const { view, route } = store
  const { value = '', focus } = view.SearchInput
  const { search = [] } = route.query
  const { searchQuery } = eventHandlers(props)

  const activeValue = search.join('')
  const searchValue = activeValue || value 
  const className = [
    'tag', 
    searchValue ? 'enabled' : '', 
    activeValue ? 'active': '',
  ].join(' ')

  return <label className={className} disabled={!searchValue}>
    <input type='checkbox' name='search' value={activeValue} onClick={searchQuery} />
    <svg viewBox='0 0 18 18'>
      <path d="M9,5 v8 M5,9 h8" />
    </svg>
    { searchValue || '' }
    <svg className='secondary' viewBox='0 0 18 18'>
      <path d='M10,10 l4,4' /><circle cx='7' cy='7' r='4'/>
    </svg>   
  </label>

}