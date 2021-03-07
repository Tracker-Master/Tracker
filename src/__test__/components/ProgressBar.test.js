import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProgressBar from 'Components/ProgressBar';

describe('<ProgressBar />', () => {
  
  test('ProgressBar rendering', () => {
    const progressBar = shallow(<ProgressBar />);
    expect(progressBar.length).toBe(1);
  });

  test('ProgressBar snapshot', () => {
    const wrapper = create(<ProgressBar />);
    expect(wrapper).toMatchSnapshot();
  });

});