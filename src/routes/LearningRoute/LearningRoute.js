import React, { Component } from 'react';
import ProgressContext from '../../contexts/ProgressContext';
import { submitGuess, fetchWords } from '../../services/main-service';
import Response from '../../components/Response/Response';
import './LearningRoute.css';

export default class LearningRoute extends Component {
  handleSubmit = (guess) => {
    submitGuess(guess).then((result) => {
      this.context.setPrevWord(this.context.nextWord);
      this.context.clearError();
      this.context.setTotalScore(result.totalScore);
      this.context.setWordCorrectCount(result.wordCorrectCount);
      this.context.setWordIncorrectCount(result.wordIncorrectCount);
      this.context.setNextWord(result.nextWord);
      this.context.setAnswer(result.answer);
      this.context.setGuess(guess);
      this.context.setIsCorrect(result.isCorrect);
      this.context.setIsResultDisplayed(true);
    });
  };

  componentDidMount() {
    fetchWords()
      .then((data) => {
        if (!data) {
          throw new Error('Something went wrong');
        }
        this.context.setNextWord(data.nextWord);
        this.context.setTotalScore(data.totalScore);
        this.context.setWordCorrectCount(data.wordCorrectCount);
        this.context.setWordIncorrectCount(data.wordIncorrectCount);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  render() {
    return (
      <section>
        {!this.context.isResultDisplayed ? (
          <section>
            <div className='translate-container'>
              <h2 className='instructions-header'>
                Translate the word: {this.context.nextWord}
              </h2>
            </div>
            <form
              id='submit-form'
              onSubmit={(e) => {
                e.preventDefault();
                this.handleSubmit(e.target.guessForm.value);
              }}
            >
              <label htmlFor='learn-guess-input'>
                What's the translation for this word?
              </label>
              <input
                type='text'
                name='guessForm'
                id='learn-guess-input'
                required
              ></input>
              <button type='submit'>Submit</button>
            </form>
          </section>
        ) : (
          <Response />
        )}
        <div className='DisplayScore'>
          <p className='total-score word-score-keeper'>
            Your total score is: {this.context.totalScore}
          </p>
        </div>
        {!this.context.isResultDisplayed && (
          <>
            {' '}
            <p className='word-correct'>
              You have answered this word correctly{' '}
              {this.context.wordCorrectCount} times.
            </p>
            <p className='word-incorrect'>
              You have answered this word incorrectly{' '}
              {this.context.wordIncorrectCount} times.
            </p>
          </>
        )}
      </section>
    );
  }
}

LearningRoute.contextType = ProgressContext;

