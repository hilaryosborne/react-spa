import React from 'react'
import { shallow } from 'enzyme'
import { Row } from './Row'

describe('Core Component Tests', () => {
  it('Existential Test', () => {
    const row = shallow(<Row />)
    expect(row).toHaveLength(1)
  })
  it('Applies custom styles', () => {
    const row = shallow(<Row style={{backgroundColor: '#000'}} />)
    expect(row.prop('style')).toHaveProperty('backgroundColor', '#000')
  })
  it('Applies custom class names', () => {
    const row = shallow(<Row className='test-classname' />)
    expect(row.hasClass('test-classname')).toEqual(true)
  })
  it('Adds children components', () => {
    const row = shallow(<Row>
      <strong>I am a child</strong>
    </Row>)
    expect(row.children()).toHaveLength(1)
  })
})
