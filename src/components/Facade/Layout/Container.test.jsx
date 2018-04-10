import React from 'react'
import { shallow } from 'enzyme'
import { Container } from './Container'

describe('Core Component Tests', () => {
  it('Existential Test', () => {
    const container = shallow(<Container />)
    expect(container).toHaveLength(1)
  })
  it('Applies custom styles', () => {
    const container = shallow(<Container style={{backgroundColor: '#000'}} />)
    expect(container.prop('style')).toHaveProperty('backgroundColor', '#000')
  })
  it('Applies custom class names', () => {
    const container = shallow(<Container className='test-classname' />)
    expect(container.hasClass('test-classname')).toEqual(true)
  })
  it('Adds children components', () => {
    const container = shallow(<Container>
      <strong>I am a child</strong>
    </Container>)
    expect(container.children()).toHaveLength(1)
  })
})
