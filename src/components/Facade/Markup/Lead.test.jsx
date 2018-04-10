import React from 'react'
import { shallow } from 'enzyme'
import { Lead } from './Lead'

describe('Core Component Tests', () => {
  it('Existential Test', () => {
    const lead = shallow(<Lead />)
    expect(lead).toHaveLength(1)
  })
  it('Applies custom styles', () => {
    const lead = shallow(<Lead style={{backgroundColor: '#000'}} />)
    expect(lead.prop('style')).toHaveProperty('backgroundColor', '#000')
  })
  it('Applies custom class names', () => {
    const lead = shallow(<Lead className='test-classname' />)
    expect(lead.hasClass('test-classname')).toEqual(true)
  })
  it('Adds children components', () => {
    const lead = shallow(<Lead>
      <strong>I am a child</strong>
    </Lead>)
    expect(lead.children()).toHaveLength(1)
  })
})
