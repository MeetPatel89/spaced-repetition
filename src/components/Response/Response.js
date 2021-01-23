import React, { Component } from 'react';
import ProgressContext from '../../contexts/ProgressContext';

export default class Response extends Component {

    handleClick = () => {
        this.context.setIsResultDisplayed(false);
    }

    displayMsg = () => {
    if (this.context.isCorrect) {
      return <h2>You were correct! :D</h2>;
    } else {
      return <h2>Good try, but not quite right :(</h2>;
    }
  };

    render() {
        return (
          <section className='feedback'>
            <div className='DisplayFeedback'>
              {this.displayMsg()}
              <p>
                The correct translation for{' '}
                <span>{this.context.prevWord}</span> was{' '}
                {this.context.answer} and you chose {this.context.guess}!
              </p>
              <button onClick={this.handleClick}>Try another word!</button>
            </div>
          </section>
        );
    }
}

Response.contextType = ProgressContext;