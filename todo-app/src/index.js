import React from 'react';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from './components/TodoApp';

import styles from './styles/app.scss';

render(
  <TodoApp />,
  document.getElementById('app')
);
