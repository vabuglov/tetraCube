import MainMenu from './MainMenu'
import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });


describe('input test', () => {
  const mainMenu = shallow(<MainMenu />);
  it('to match snapshot', () => {
    expect(mainMenu.debug()).to.matchSnapshot();
  });
});