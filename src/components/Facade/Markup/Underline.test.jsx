import React from 'react'
import { shallow } from 'enzyme'
import { Underline } from './Underline'

describe('Core Component Tests', () => {
  it('Existential Test', () => {
    const underline = shallow(<Underline />)
    expect(underline).toHaveLength(1)
  })
  it('Applies custom styles', () => {
    const underline = shallow(<Underline style={{backgroundColor: '#000'}} />)
    expect(underline.prop('style')).toHaveProperty('backgroundColor', '#000')
  })
  it('Applies custom class names', () => {
    const underline = shallow(<Underline className='test-classname' />)
    expect(underline.hasClass('test-classname')).toEqual(true)
  })
  it('Adds children components', () => {
    const underline = shallow(<Underline>
      <strong>I am a child</strong>
    </Underline>)
    expect(underline.children()).toHaveLength(2)
  })
})
