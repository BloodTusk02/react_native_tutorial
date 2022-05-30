import React from 'react';
import renderer from 'react-test-renderer';
import Auth from '../components/Auth';

test('renders correctly', () => {
    const tree = renderer.create(<Auth />).toJSON();
    expect(tree).toMatchSnapshot();
  });