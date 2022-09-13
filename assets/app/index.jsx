import { render } from 'react-dom';
import App from './App';
import React from 'react';
import '../css/index.css';


$.ajaxSetup({
  beforeSend: function(xhr, settings) {
    const pageId = window.location.href.split('/').slice(-1)[0];
    xhr.setRequestHeader('pageId', pageId);
  },
});

// sagaMiddleware.run(initialize);

const HTMLRoot = document.getElementById('root');

render(<App title={process.env.TITLE} />, HTMLRoot);

// if (module.hot) {
//   module.hot.accept('./Header', () => {
//     const NextRoot = require('./Header');
//     render(
//       <AppContainer>
//         <NextRoot />
//       </AppContainer>,
//       HTML_Root
//     );
//   });
// }
