import React, { Component } from 'react';

const initialState = {
  totalScore: 0,
  wordCorrectCount: 0,
  wordIncorrectCount: 0,
  nextWord: null,
  guess: null,
  prevWord: null,
  isCorrect: null,
  answer: null,
  error: null,
  isResultDisplayed: false,
};

const { Provider, Consumer } = React.createContext({
  ...initialState,
  setError: () => {},
  clearError: () => {},
  setNextWord: () => {},
  setTotalScore: () => {},
  setWordCorrectCount: () => {},
  setWordIncorrectCount: () => {},
  setGuess: () => {},
  setAnswer: () => {},
  setIsCorrect: () => {},
  reset: () => {},
  setIsResultDisplayed: () => {},
});