import { combineReducers } from 'redux'
import { parkings, parkingsRequest } from './parkings'
import { configurations } from './configuration'

const reducers = combineReducers({
	parkings,
	parkingsRequest,
	configurations
})

export default reducers