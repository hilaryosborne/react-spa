import React from 'react'
import { shallow } from 'enzyme'
import { H4 } from './H4'

describe('Core Component Tests', () => {
  it('Existential Test', () => {
    const h4 = shallow(<H4 />)
    expect(h4).toHaveLength(1)
  })
  it('Applies custom styles', () => {
    const h4 = shallow(<H4 style={{backgroundColor: '#000'}} />)
    expect(h4.prop('style')).toHaveProperty('backgroundColor', '#000')
  })
  it('Applies custom class names', () => {
    const h4 = shallow(<H4 className='test-classname' />)
    expect(h4.hasClass('test-classname')).toEqual(true)
  })
  it('Adds children components', () => {
    const h4 = shallow(<H4>
      <strong>I am a child</strong>
    </H4>)
    expect(h4.children()).toHaveLength(1)
  })
})
