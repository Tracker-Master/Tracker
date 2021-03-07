import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { StaticRouter } from 'react-router';
import Header from 'Components/Header';

describe('<Header />', () => {
  const header = shallow(
    <StaticRouter>
      <Header />
    </StaticRouter>
  );

  test('Header rendering', () => {
    expect(header.length).toBe(1);
  });

  test('Header snapshot', () => {
    const wrapper = create(
      <StaticRouter>
        <Header />
      </StaticRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
  
});