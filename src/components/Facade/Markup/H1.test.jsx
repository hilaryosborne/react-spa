import React from 'react'
import { shallow } from 'enzyme'
import { H1 } from './H1'

describe('Core Component Tests', () => {
  it('Existential Test', () => {
    const h1 = shallow(<H1 />)
    expect(h1).toHaveLength(1)
  })
  it('Applies custom styles', () => {
    const h1 = shallow(<H1 style={{backgroundColor: '#000'}} />)
    expect(h1.prop('style')).toHaveProperty('backgroundColor', '#000')
  })
  it('Applies custom class names', () => {
    const h1 = shallow(<H1 className='test-classname' />)
    expect(h1.hasClass('test-classname')).toEqual(true)
  })
  it('Adds children components', () => {
    const h1 = shallow(<H1>
      <strong>I am a child</strong>
    </H1>)
    expect(h1.children()).toHaveLength(1)
  })
})
