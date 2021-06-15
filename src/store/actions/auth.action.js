import React from 'react';
import { Http } from '../../config/http';
import { Alert } from '@material-ui/lab';

export const actionTypes = {
  CHANGE: 'AUTH_CHANGE',
  SUCCESS: 'AUTH_SUCCESS',
};

export const change = (payload) => ({
  type: actionTypes.CHANGE,
  payload,
});

export const success = (payload) => ({
  type: actionTypes.SUCCESS,
  payload,
});

export const setUserToken = (token) => (dispatch) => {
  localStorage.setItem('access_token', token);
  dispatch(
    change({
      email: '',
      password: '',
    }),
  );

  dispatch(success(true));
};

export const login = (credentials) => (dispatch) => {
  return Http.post('oauth/token', {
    grant_type: 'password',
    client_id: 2,
    client_secret: 'gpDyL1ZQTVZw3qcfS6fZ5RGatBiilMzZvj4ty7dp',
    username: credentials.email,
    password: credentials.password,
  })
    .then((res) => {
      if (typeof res !== 'undefined') {
        if (res.data.access_token) {
          dispatch(setUserToken(res.data.access_token));
        }
      }
    })
    .catch((error) => {
      if (typeof error.response !== 'undefined') {
        if (error.response.status === 401 || error.response.status === 400) {
          <Alert variant="filled" severity="error">
            Incorrect email or password - check!
          </Alert>;
        }
      } else {
        <Alert variant="filled" severity="error">
          Error connecting to server!
        </Alert>;
      }
    });
};
