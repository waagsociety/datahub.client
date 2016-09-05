import axios from 'axios'
import { route } from '../'

export const article = {

  load: dispatch => query => {

    const itemId = query.article.join('')

    axios({
      method: 'GET',
      url: `http://138.201.141.84/rest/items/${itemId}?expand=all`,
      headers: { 
        'accept': 'application/json' 
      },
    })
      .then(request => {
        dispatch({
          type: 'article-fetched',
          payload: request.data
        })
      })
      .catch(error => {
        dispatch({
          type: 'article-error',
          payload: error
        })
      })

    return {
      type: 'article-loading',
      payload: true
    }

  },

  close: () => ({
    type: 'article-close',
    payload: {
      content: null,
      active: false,
    }
  })

}