import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils  from 'react-dom/test-utils';
import * as ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import App from './App';
import StatefulComponent from './StatefulComponent';

describe('App', () => {
  let renderer: ShallowRenderer;

  beforeEach(() => {
    renderer =  TestUtils.createRenderer();
    renderer.render(<App />);
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  
  it('renders a component that will changed based on state', () => {
    const wrapper = renderer.getRenderOutput();
    wrapper.find(<StatefulComponent />);
  });
});
