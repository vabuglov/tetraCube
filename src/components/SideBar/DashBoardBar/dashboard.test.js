import Dashboard from './DashBoardBar'
import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
  }),
  useLocation: () => ({
    hash: "",
    key: "y7chsu",
    pathname: "/",
    search: "",
    state: undefined,
  }),
}));

describe('dashboard tests', () => {
  const dashboard = shallow(<Dashboard />);
  it('to match snapshot', () => {
    expect(dashboard).to.matchSnapshot();
  });
});