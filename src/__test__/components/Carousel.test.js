import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Carousel from 'Components/Carousel';

describe('<Carousel />', () => {
  
  const component = shallow(<Carousel />);

  test('Carousel rendering', () => {
    expect(component.length).toBe(1);
  });

  test(`Carousel's snapshot`, () => {
    const wrapper = create(<Carousel />);
    expect(wrapper).toMatchSnapshot();
  });


});