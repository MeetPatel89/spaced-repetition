import React, { Component } from 'react';
import MainContext from '../../contexts/MainContext';
import { fetchLanguage } from '../../services/main-service';
import './Dashboard.css'

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
            <h4 className="word">{word.original}</h4><p className="correct"> correct answer count: {word.correct_count}</p><p className="incorrect"> incorrect answer count:{' '}
            {word.incorrect_count}</p>
          </li>
        </ul>
      );
    });
    return (
      <section className='dashboard'>
        <h2 className='language'> {this.context.language.name} </h2>
        <div className='stats'>
          <h2>Total correct answers: {this.context.language.total_score} </h2>
        </div>
        <a href='/learn' className='practice'>
          Start practicing
        </a>

        <div className='word-list'>
          <h3>Words to practice</h3>
          {wordsArr}
        </div>
      </section>
    );
}
}

DashboardRoute.contextType = MainContext;

export default DashboardRoute;
