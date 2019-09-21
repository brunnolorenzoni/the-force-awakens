import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Routes from './index';

Enzyme.configure({adapter: new Adapter()})

describe('Routes', () => {
    it('Create routes', () => {
        const wrapper = shallow(<Routes />);
        expect(wrapper.length);
    })
})