import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import UserContainer from './components/UserContainer';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
      </div>
    </Provider>
  );
};

export default App;

