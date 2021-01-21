import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext({
  language: [],
  words: [],
  setLanguage: () => {},
  setWords: () => {},
});

class MainContextProvider extends Component {
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

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { MainContextProvider, Consumer as MainContextConsumer };
