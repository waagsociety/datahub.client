import React from 'react'
import { eventHandlers } from './events'
import { SearchFiltersGroup } from '../../components'
import { fieldIndex, domain } from '../../config'

export default function Dataset({ props }) {

  const { store, dispatch } = props
  const { dataset, route } = store

  const atCurrentDataset = route.query.article[0] === dataset.id

  if (dataset.loading || !atCurrentDataset) return <h1>Loading</h1>

  const { closeDataset } = eventHandlers(props)
  const { name, metadata = [] } = dataset.content

  const meta = metadata.reduce((result, { key, value }) => {
    const data = result[key] || []
    result[key] = data.concat([ value ])
    return result
  }, {})

  const description = meta['dc.description.abstract'].map((content, i) => {
    return <p key={i}>{content}</p>
  })

  const fieldMeta = fieldIndex.reduce((result, item) => {

    const { field, key } = item
    if (field in meta && meta[field].length){
      item.tags = meta[field]
      result.push(<li key={field}>
        <header>{item.name}</header>
        <ul className='group'>{ meta[field].map((filter, i) => 
          <li key={i}><a className='tag' href={`#${key}=${filter}`}>{filter}</a></li>
        )}</ul>
      </li>)
    }
    return result

  }, [])

  const leftPadZero = value => value.length < 2 ? '0' + value : value

  const issued = meta['dc.date.issued'].reduce((result, date) => {
    const dateObject = new Date(date)
    return {
      date: dateObject,
      day: leftPadZero(dateObject.getDate().toString()),
      month: leftPadZero((dateObject.getMonth() + 1).toString()),
      year: dateObject.getFullYear().toString(),
    }
  }, {})
  console.log(meta)

  return <article id='dataset' className='content'>
    <button className='close button' type='button' onClick={closeDataset}>Close</button>
    <section className='body content'>
      <h1>{name}</h1>
      {description}
    </section>
    <footer className='container'>
        <ul className='metadata related'>
          <li>
            <header>Issued</header>
            <time dateTime={issued.date}>{issued.day}.{issued.month}.{issued.year}</time>
          </li>
          <li>
            <header>Created</header>
            <time dateTime={issued.date}>{issued.day}.{issued.month}.{issued.year}</time>
          </li>
        </ul>
        <ul className='metadata fields'>{fieldMeta}</ul>
    </footer>
  </article>

}