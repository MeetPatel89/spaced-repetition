import React, { Component } from 'react';

const MainContext = React.createContext({
  language: [],
  words: [],
  setLanguage: () => {},
  setWords: () => {},
});

export default MainContext;

export class MainContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: {},
      words: [],
    };
  }

  setLanguage = (language) => {
    this.setState({
      language,
    });
  };

  setWords = (words) => {
    this.setState({
      words,
    });
  };

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      setLanguage: this.setLanguage,
      setWords: this.setWords,
    };

    return (
      <MainContext.Provider value={value}>
        {this.props.children}
      </MainContext.Provider>
    );
  }
}
