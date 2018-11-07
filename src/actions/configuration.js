import { createActions } from 'redux-actions'
import api from 'services/api'
import apiRoutes from 'constants/apiRoutes'

const { fetchConfigurationStart, fetchConfigurationSuccess, fetchConfigurationError } = createActions({
	FETCH_CONFIGURATION_START: () => { },
	FETCH_CONFIGURATION_SUCCESS: data => ({ data }),
	FETCH_CONFIGURATION_ERROR: error => ({ error })
})

const fetchConfiguration = () => {
	return async dispatch => {
		dispatch(fetchConfigurationStart())
		try {
			const response = await api.get(`${apiRoutes.CONFIGURATION}`)
			dispatch(fetchConfigurationSuccess({ response: response.data }))
		} catch (error) {
			dispatch(fetchConfigurationError({ error }))
		}
	}
}

export {
    fetchConfigurationStart,
    fetchConfigurationSuccess,
    fetchConfigurationError,
    fetchConfiguration
}