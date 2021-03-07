import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from 'Components/Footer';

describe('<Footer />', () => {
  const footer = shallow(<Footer />);

  test('Footer rendering', () => {
    expect(footer.length).toBe(1);
  });

  test('Footer snapshot', () => {
    const wrapper = renderer.create(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });


});