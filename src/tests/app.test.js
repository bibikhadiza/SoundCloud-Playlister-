import expect from 'expect'
import React from 'react'
import ReactDOM from 'react-dom';
import {App} from '../App'
import { shallow, render, mount } from 'enzyme'

describe(<App />, () => {
  if('renders without exploding', () => {
    expect(
      shallow(
        <App />
      ).length
    ).toEqual(1);
  });

  it('calls componentDidMount', () => {
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('renders one <SearchResults /> component', () => {
   const wrapper = shallow(<App />);
   expect(wrapper.find(SearchResults)).to.have.length(1);
 });

  it('has one <Header /> component', () => {
   const wrapper = shallow(<App />)
   expect(wrapper.find(header).length).toEqual(1)
  })


  it('renders an audio player', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find('audio').length).toEqual(1)
  })

})
