import React from 'react'
import { shallow } from 'enzyme'
import { Btn } from './Btn'

describe('Core Component Tests', () => {
  it('Existential Test', () => {
    const btn = shallow(<Btn />)
    expect(btn).toHaveLength(1)
  })
  it('Applies custom styles', () => {
    const btn = shallow(<Btn style={{backgroundColor: '#000'}} />)
    expect(btn.prop('style')).toHaveProperty('backgroundColor', '#000')
  })
  it('Applies custom class names', () => {
    const btn = shallow(<Btn className='test-classname' />)
    expect(btn.hasClass('test-classname')).toEqual(true)
  })
})
