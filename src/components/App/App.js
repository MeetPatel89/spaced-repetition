import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute';
import LearningRoute from '../../routes/LearningRoute/LearningRoute';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';
import './App.css';
import { MainContextProvider } from '../../contexts/MainContext';
import { fetchLanguage, fetchWords } from '../../services/main-service';


export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidMount() {
    const promises = [fetchLanguage(), fetchWords()];
    Promise.all(promises)
      .then((values) => {
        console.log(values)
        this.setState({
          language: values[0].language,
          words: values[0].words,
          head: values[1],
        });
      })
      .catch((hasError) => {
        this.setState({
          hasError,
        });
      });
  }

  render() {
    console.log(fetchLanguage);
    console.log(fetchWords);
    const { hasError } = this.state;
    console.log(hasError)
    return (
      <MainContextProvider>
        <div className='App'>
          <Header />
          <main>
            {hasError && (
              <p className='error-message'>There was an error! Oh no!</p>
            )}
            <Switch>
              <PrivateRoute exact path={'/'} component={DashboardRoute} />
              <PrivateRoute path={'/learn'} component={LearningRoute} />
              <PublicOnlyRoute
                path={'/register'}
                component={RegistrationRoute}
              />
              <PublicOnlyRoute path={'/login'} component={LoginRoute} />
              <Route component={NotFoundRoute} />
            </Switch>
          </main>
        </div>
      </MainContextProvider>
    );
  }
}
