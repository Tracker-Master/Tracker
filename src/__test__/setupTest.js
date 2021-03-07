import { configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';
import fetchMock from 'jest-fetch-mock';
import 'jest-styled-components';

configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

fetchMock.enableMocks();
