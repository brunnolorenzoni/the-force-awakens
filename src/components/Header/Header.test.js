import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './Header'
import TitleHeader from './TitleHeader/TitleHeader';
import MenuNavigation from './MenuNavigation/MenuNavigation';
import SocialMediaBar from './SocialMediaBar/SocialMediaBar';

Enzyme.configure({adapter: new Adapter()})

describe('Header component', () => {

    it('It should render without errors', () => {
        const component = shallow(<Header />);
        const wrapper = component.find("#header-wrapper");
        expect(wrapper.length).toBe(1)
    })

});

describe('Header component has Title', () => {

    it('It should render without errors', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(TitleHeader)).toHaveLength(1);
    })

});

describe('Header component has Social media bar', () => {

    it('It should render without errors', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(SocialMediaBar)).toHaveLength(1);
    })

});

describe('Header component has menu', () => {

    it('It should render without errors', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(MenuNavigation)).toHaveLength(1);
    })

});



