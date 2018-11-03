import { handleActions } from 'redux-actions';
import {
  fetchParkingsStart,
  fetchParkingsSuccess,
  fetchParkingsError,
  requestParkingsStart, 
	requestParkingsSuccess, 
	requestParkingsError
} from 'actions/parkings';

const defaultFetchState = {
  data: [],
  isFetching: false,
  error: null
}

export const parkings = handleActions(
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
  defaultFetchState
);

const defaultRequestState = {
  data: null,
  isRequesting: false,
  error: null
}

export const parkingsRequest = handleActions(
  {
    [requestParkingsStart]: state => ({
      ...state,
      isRequesting: true,
      error: null
    }),
    [requestParkingsSuccess]: (state, { payload: { data: { response } } }) => {
      return {
        ...state,
        data: response,
        isRequesting: false,
        error: null
      }
    },
    [requestParkingsError]: (state, { payload: { error } }) => ({
      ...state,
      data: null,
      isRequesting: false,
      error
    })
  },
  defaultRequestState
);
