import React, { Component } from 'react';
import MainContext from '../../contexts/MainContext';
import { fetchLanguage } from '../../services/main-service';

class DashboardRoute extends Component {
  componentDidMount() {
    fetchLanguage().then((res) => {
      this.context.setLanguage(res.language);
      this.context.setWords(res.words);
    });
  }

  render() {
    const wordsArr = this.context.words.map((word) => {
      return (
        <ul key={word.id} className='arr'>
          <li>
            <p>{word.original}</p> ✅: {word.correct_count} ❌:{' '}
            {word.incorrect_count}
          </li>
        </ul>
      );
    });
    return (
      <section className='dashboard'>
        <h2> {this.context.language.name} </h2>
        <div className='stats'>
          <h2>Total Score: {this.context.language.total_score} </h2>

        </div>
        <a href='/learn'>Start Practicing</a>
        <h3> Words To Practice </h3>
        <div className='word-list'>{wordsArr}</div>
      </section>
    )
}
}

DashboardRoute.contextType = MainContext;

export default DashboardRoute;
