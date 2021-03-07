import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './routes/App';
import { BoardContextProvider } from 'Context/BoardContext';
import { GlobalStyle } from 'Styles/GlobalStyles';


ReactDOM.render(
  <BoardContextProvider>
    <GlobalStyle />
    <App />
  </BoardContextProvider>, 
  document.getElementById('app')
);
