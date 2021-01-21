import React, { Component } from 'react';

const MainContext = React.createContext({
    lang: [],
    words: [],
    setLang: () => {},
    setWords: () => {}
})