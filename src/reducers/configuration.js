import { handleActions } from 'redux-actions';
import {
    fetchConfigurationStart,
    fetchConfigurationSuccess,
    fetchConfigurationError
} from 'actions/configuration';

const defaultFetchState = {
    data: [],
    isFetching: false,
    error: null
}

export const configurations = handleActions(
    {
        [fetchConfigurationStart]: state => ({
            ...state,
            isFetching: true,
            error: null
          }),
          [fetchConfigurationSuccess]: (state, { payload: { data: { response } } }) => {
            return {
              ...state,
              data: response,
              isFetching: false,
              error: null
            }
          },
          [fetchConfigurationError]: (state, { payload: { error } }) => ({
            ...state,
            data: [],
            isFetching: false,
            error
          })
    },
    defaultFetchState
)