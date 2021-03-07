import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { StaticRouter } from 'react-router';
import Layout from 'Components/Layout';

describe('<Layout />', () => {
  const layout = shallow(
    <StaticRouter>
      <Layout />
    </StaticRouter>
  );

  test('Layout rendering', () => {
    expect(layout.length).toBe(1);
  });


  test('Layout snapshot', () => {
    const wrapper = create(
      <StaticRouter>
        <Layout />
      </StaticRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });

});
