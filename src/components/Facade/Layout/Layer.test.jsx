import React from 'react'
import { shallow } from 'enzyme'
import { Layer } from './Layer'

describe('Core Component Tests', () => {
  it('Existential Test', () => {
    const layer = shallow(<Layer />)
    expect(layer).toHaveLength(1)
  })
  it('Applies custom styles', () => {
    const layer = shallow(<Layer style={{backgroundColor: '#000'}} />)
    expect(layer.prop('style')).toHaveProperty('backgroundColor', '#000')
  })
  it('Applies custom class names', () => {
    const layer = shallow(<Layer className='test-classname' />)
    expect(layer.hasClass('test-classname')).toEqual(true)
  })
  it('Adds children components', () => {
    const layer = shallow(<Layer>
      <strong>I am a child</strong>
    </Layer>)
    expect(layer.children()).toHaveLength(1)
  })
})
