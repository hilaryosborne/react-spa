import React from 'react'
import { shallow } from 'enzyme'
import { H2 } from './H2'

describe('Core Component Tests', () => {
  it('Existential Test', () => {
    const h2 = shallow(<H2 />)
    expect(h2).toHaveLength(1)
  })
  it('Applies custom styles', () => {
    const h2 = shallow(<H2 style={{backgroundColor: '#000'}} />)
    expect(h2.prop('style')).toHaveProperty('backgroundColor', '#000')
  })
  it('Applies custom class names', () => {
    const h2 = shallow(<H2 className='test-classname' />)
    expect(h2.hasClass('test-classname')).toEqual(true)
  })
  it('Adds children components', () => {
    const h2 = shallow(<H2>
      <strong>I am a child</strong>
    </H2>)
    expect(h2.children()).toHaveLength(1)
  })
})
