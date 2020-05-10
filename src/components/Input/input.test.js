import Input from './Input'
import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
}));

describe('input test', () => {
  const inputProps = { value: "Валера", className: "newClass" };
  const input = shallow(<Input {...inputProps} />);
  it('test className', () => {
    const expected = inputProps.className;
    expect(input.hasClass(expected)).to.equal(true);
  });
  it('each input should have className: mainInput', () => {
    const expected = "mainInput";
    expect(input.hasClass(expected)).to.equal(true);
  });
  it('to match snapshot', () => {
    expect(input).to.matchSnapshot();
  })
});

