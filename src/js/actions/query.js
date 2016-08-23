import { browserHistory } from 'react-router'

export const query = {

	initialise: (location) => ({
		type: 'query-initialise',
		payload: location
	}),

	update: ({ name, value }) => {
        return {
		  type: 'query-update',
		  payload: { name, value },
        }
	},

}