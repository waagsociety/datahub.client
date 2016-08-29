import React from 'react'
import { connect } from 'react-redux'

import { SearchPanel, ResultPanel, FilterSelection, MapBox } from '../../containers'
import handlers from './events'
import { filter } from '../../store' // Temp A

@connect ((store) => ({ store }))
export default class Browse extends React.Component {

  componentWillMount() {

    // this.props.store.filter.value = "okay" // preset a search input value

    const { dispatch } = this.props 
    dispatch(filter.tempInit())

  }

  render() {

    const { props } = this
    const { onSubmit, onChange, onTest } = handlers(props)
    
    // <FilterSelection props={props} />
    
    return <form id='Browse' className='page' method='get' action='/' onSubmit={onSubmit} onChange={onChange} >
      <SearchPanel props={props} />
      <ResultPanel props={props} />
      
    </form>

  }

}