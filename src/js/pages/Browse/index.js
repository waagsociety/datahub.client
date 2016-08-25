import React from 'react'
import { connect } from 'react-redux'

import { SearchPanel, QueryPath, MapBox } from '../'
import handlers from './events'
import { filter } from '../../store' // Temp A

@connect ((store) => ({ store }))
export default class Browse extends React.Component {

  componentWillMount() {

    // Temp A) Prefetch metadata filters from all dSpace items
    const { dispatch } = this.props 
    dispatch(filter.tempInit())

  }

  render() {

    const { props } = this
    const { onSubmit, onChange } = handlers(props)
    
    // <QueryPath props={props} />
    
    return <form id='Browse' className='page' method='get' action='/' onSubmit={onSubmit} onChange={onChange} >
      <SearchPanel props={props} />
      
    </form>

  }

}