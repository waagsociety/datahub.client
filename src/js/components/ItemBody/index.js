import React from 'react'

export default function ItemBody({ description, author, dspace, reference }) {

  return <section className='ItemBody content'>
    
    {description.map((text, index) => <p key={index}>{text}</p>)}

    {dspace.map((link, index) => 
      <a key={index} className="primary button" href={link.replace('/xmlui/', '/jspui/')} target='_blank'>Complete description (DSpace)</a>
    )}

    {Ref(reference)}

  </section>

}

function Authors(content) {

  if (content.length) return <section>
    <header>{content.length > 1 ? 'Authors' : 'Author'}</header>
    <ul className="authors">
    { content.map((value, i) => <li key={i}>{value}</li>) }
    </ul>
  </section>
  else return []

}

function Ref(url) {
  if (url.length) return <a href={url} className="external button" target="_blank">More Information...</a>
  else return []
}
