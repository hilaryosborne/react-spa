import React from 'react'
import { shallow } from 'enzyme'
import { Col } from './Col'

describe('Core Component Tests', () => {
  it('Existential Test', () => {
    const col = shallow(<Col />)
    expect(col).toHaveLength(1)
  })
  it('Applies custom styles', () => {
    const col = shallow(<Col style={{backgroundColor: '#000'}} />)
    expect(col.prop('style')).toHaveProperty('backgroundColor', '#000')
  })
  it('Applies custom class names', () => {
    const col = shallow(<Col className='test-classname' />)
    expect(col.hasClass('test-classname')).toEqual(true)
  })
  it('Adds children components', () => {
    const col = shallow(<Col>
      <strong>I am a child</strong>
    </Col>)
    expect(col.children()).toHaveLength(1)
  })
})

describe('Layout Component Tests', () => {
  it('Has bootstrap sm class', () => {
    const col = shallow(<Col sm='3' />)
    expect(col.hasClass('col-sm-3')).toEqual(true)
  })
  it('Has bootstrap md class', () => {
    const col = shallow(<Col md='3' />)
    expect(col.hasClass('col-md-3')).toEqual(true)
  })
  it('Has bootstrap lg class', () => {
    const col = shallow(<Col lg='3' />)
    expect(col.hasClass('col-lg-3')).toEqual(true)
  })
  it('Has bootstrap xl class', () => {
    const col = shallow(<Col xl='3' />)
    expect(col.hasClass('col-xl-3')).toEqual(true)
  })
})
