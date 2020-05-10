import Input from './Input'
import React from 'react';
import { configure, mount } from 'enzyme';
import { expect } from 'chai';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe('input test', () => {
  const inputProps = { value: "Валера", className: "newClass" };
  const input = mount(<Input {...inputProps} />);
  it('test className', () => {
    const expected = inputProps.className;
    expect(input.hasClass(expected)).to.equal(true);
  });
  it('each input should have className: mainInput', () => {
    expect(input.find('div.mainInput')).to.have.lengthOf(1);
  });
  it('to match snapshot', () => {
    expect(input.debug()).to.matchSnapshot();
  })
});

