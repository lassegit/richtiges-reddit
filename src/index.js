import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Comments from './containers/Comments';
import GlobalStyles from './utils/GlobalStyles';
import Home from './containers/Home';
import Posts from './containers/Posts';
import store from './redux';
import theme from './utils/theme';
import * as serviceWorker from './utils/serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/r/:id" component={Posts} />
          <Route path="/comments/:sub/:id" component={Comments} />
          <Route path="/" exact component={Home} />
        </Switch>
      </HashRouter>
      <GlobalStyles />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
