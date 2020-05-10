import Button from './ButtonText'
import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });


describe('input test', () => {
  const buttonProps = { value: "Валера", className: "newClass" };
  const button = shallow(<Button {...buttonProps} />);
  it('test className', () => {
    const expected = buttonProps.className;
    expect(button.hasClass(expected)).to.equal(true);
  });
  it('to match snapshot', () => {
    expect(button.debug()).to.matchSnapshot();
  });
});