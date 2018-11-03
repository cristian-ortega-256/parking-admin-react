import { createActions } from 'redux-actions'
import api from 'services/api'
import apiRoutes from 'constants/apiRoutes'
import parkings from '../reducers/parkings';

const { fetchParkingsStart, fetchParkingsSuccess, fetchParkingsError } = createActions({
	FETCH_PARKINGS_START: () => { },
	FETCH_PARKINGS_SUCCESS: data => ({ data }),
	FETCH_PARKINGS_ERROR: error => ({ error })
})

const fetchParkings = () => {
	return async dispatch => {
		dispatch(fetchParkingsStart())
		try {
			const response = await api.get(`${apiRoutes.PARKINGS}`)
			dispatch(fetchParkingsSuccess({ response: response.data }))
		} catch (error) {
			dispatch(fetchParkingsError({ error }))
		}
	}
}

const { requestParkingsStart, requestParkingsSuccess, requestParkingsError } = createActions({
	REQUEST_PARKINGS_START: () => { },
	REQUEST_PARKINGS_SUCCESS: data => ({ data }),
	REQUEST_PARKINGS_ERROR: error => ({ error })
})

const editParking = parking => {
	return async dispatch => {
		dispatch(fetchParkingsStart())
		try {
			const response = await api.put(`${apiRoutes.PARKINGS}/${parking.id}`, parking)
			dispatch(fetchParkingsSuccess({ response: response.data }))
		} catch (error) {
			dispatch(fetchParkingsError({ error }))
		}
	}
}

export {
	fetchParkingsStart,
	fetchParkingsSuccess,
	fetchParkingsError,
	fetchParkings,
	requestParkingsStart, 
	requestParkingsSuccess, 
	requestParkingsError,
	editParking
}