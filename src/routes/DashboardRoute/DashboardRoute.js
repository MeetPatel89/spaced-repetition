import React, { Component } from 'react';
import MainContext from '../../contexts/MainContext';
import { fetchLanguage } from '../../services/main-service';

class DashboardRoute extends Component {
  
  render() {
    return (
      <section>
        implement and style me
      </section>
    );
  }
}

DashboardRoute.contextType = MainContext

export default DashboardRoute
