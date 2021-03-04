import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import SEOHeader from '../../components/SEOHeader';

describe('<SEOHeader />', () => {
  
  const title = 'Titulo de la aplicación';
  const component = <SEOHeader title={title} />;

  test('SEOHeader rendering ', () => {
    const seoHeader = shallow(component);
    expect(seoHeader.length).toBe(1);
  });

  test('SEOHeader snapshot', () => {
    const wrapper = create(component);
    expect(wrapper).toMatchSnapshot();
  });


});