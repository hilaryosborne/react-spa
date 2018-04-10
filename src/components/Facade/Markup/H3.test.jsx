import React from 'react'
import { shallow } from 'enzyme'
import { H3 } from './H3'

describe('Core Component Tests', () => {
  it('Existential Test', () => {
    const h3 = shallow(<H3 />)
    expect(h3).toHaveLength(1)
  })
  it('Applies custom styles', () => {
    const h3 = shallow(<H3 style={{backgroundColor: '#000'}} />)
    expect(h3.prop('style')).toHaveProperty('backgroundColor', '#000')
  })
  it('Applies custom class names', () => {
    const h3 = shallow(<H3 className='test-classname' />)
    expect(h3.hasClass('test-classname')).toEqual(true)
  })
  it('Adds children components', () => {
    const h3 = shallow(<H3>
      <strong>I am a child</strong>
    </H3>)
    expect(h3.children()).toHaveLength(1)
  })
})
