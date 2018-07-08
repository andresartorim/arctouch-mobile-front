import React from 'react';
import ReactDOM from 'react-dom';
import Craze from './Craze';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Craze />, div);
  ReactDOM.unmountComponentAtNode(div);
});
