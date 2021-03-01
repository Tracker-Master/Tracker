import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = shallow(<Footer />);

  test('Footer rendering', () => {
    expect(footer.length).toBe(1);
  });

  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();

});