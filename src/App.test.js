import React from 'react';
import ReactDOM from 'react-dom';
import SamuraiJSApp from './App';

/* it('renders learn react link', () => {
  render(<SamuraiJSApp/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 */

it('Render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

