import config from '../config';
import TokenService from './token-service';
import ProgressContext from '../contexts/ProgressContext';

export const fetchLanguage = () => {
  return fetch(`${config.API_ENDPOINT}/language`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `bearer ${TokenService.getAuthToken()}`,
    },
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const fetchWords = () => {
  return fetch(`${config.API_ENDPOINT}/language/head`, {
    method: 'GET',
    headers: {
      authorization: `bearer ${TokenService.getAuthToken()}`,
    },
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const submitGuess = (guess) => {
  const body = JSON.stringify({
    guess: guess,
  });

  return fetch(`${config.API_ENDPOINT}/language/guess`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${TokenService.getAuthToken()}`,
      'content-type': 'application/json',
    },
    body: body,
  })
    .then((res) => {
      if (!res.ok) {
        ProgressContext.setError(
          'Please try again!'
        );
        return res.json().then((e) => Promise.reject(e.error));
      }
      return res.json();
    })
    .catch((e) => console.error('Failed to fetch'));
};
