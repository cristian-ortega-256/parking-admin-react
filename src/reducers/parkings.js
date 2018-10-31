import { handleActions } from 'redux-actions';
import {
  fetchParkingsStart,
  fetchParkingsSuccess,
  fetchParkingsError
} from 'actions/parkings';

const defaultState = {
  data: [],
  isFetching: false,
  error: null
}

const parkings = handleActions(
  {
    [fetchParkingsStart]: state => ({
      ...state,
      isFetching: true,
      error: null
    }),
    [fetchParkingsSuccess]: (state, { payload: { data: { response } } }) => {
      return {
        ...state,
        data: response,
        isFetching: false,
        error: null
      }
    },
    [fetchParkingsError]: (state, { payload: { error } }) => ({
      ...state,
      data: [],
      isFetching: false,
      error
    })
  },
  defaultState
);

export default parkings