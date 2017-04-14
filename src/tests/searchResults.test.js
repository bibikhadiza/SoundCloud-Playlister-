import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SearchResults from '../components/searchResults/searchResults';
import sinon from 'sinon';

describe(<SearchResults />, () => {

  it('renders an div with `.ui card`', () => {
   const wrapper = shallow(<SearchResults />);
   expect(wrapper.find('.icon-star')).to.have.length(1);
  });

  it('renders form with button to play audio', () => {
   const wrapper = shallow(<SearchResults />);
   expect(wrapper.contains(form)).to.equal(true);
 });

})
