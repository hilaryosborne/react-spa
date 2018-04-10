import React from 'react'
import { shallow } from 'enzyme'
import { H5 } from './H5'

describe('Core Component Tests', () => {
  it('Existential Test', () => {
    const h5 = shallow(<H5 />)
    expect(h5).toHaveLength(1)
  })
  it('Applies custom styles', () => {
    const h5 = shallow(<H5 style={{backgroundColor: '#000'}} />)
    expect(h5.prop('style')).toHaveProperty('backgroundColor', '#000')
  })
  it('Applies custom class names', () => {
    const h5 = shallow(<H5 className='test-classname' />)
    expect(h5.hasClass('test-classname')).toEqual(true)
  })
  it('Adds children components', () => {
    const h5 = shallow(<H5>
      <strong>I am a child</strong>
    </H5>)
    expect(h5.children()).toHaveLength(1)
  })
})
