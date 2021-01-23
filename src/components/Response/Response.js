import React, { Component } from 'react';
import ProgressContext from '../../contexts/ProgressContext';
import './Response.css';

export default class Response extends Component {

    handleClick = () => {
        this.context.setIsResultDisplayed(false);
    }

    displayMsg = () => {
    if (this.context.isCorrect) {
      return <h2 className="correct-try">You were correct! :D</h2>;
    } else {
      return <h2 className="incorrect-try">Good try, but not quite right :(</h2>;
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