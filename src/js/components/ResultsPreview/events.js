import { article } from '../../store'
import { hashToQuery } from '../../pages/Browse/actions'

export const eventHandlers = ({ dispatch, history }) => ({

  loadArticle: event => {

    event.preventDefault()
    const hash = event.target.getAttribute('href')
    const query = hashToQuery(hash)

    history.push({ pathname: hash })

    dispatch(article.load(dispatch)(query))
  },

})