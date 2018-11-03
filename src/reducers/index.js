import { combineReducers } from 'redux'
import { parkings, parkingsRequest } from './parkings'

const reducers = combineReducers({
	parkings,
	parkingsRequest
})

export default reducers