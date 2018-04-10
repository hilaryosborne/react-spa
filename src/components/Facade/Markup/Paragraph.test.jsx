import React from 'react'
import { shallow } from 'enzyme'
import { Paragraph } from './Paragraph'

describe('Core Component Tests', () => {
  it('Existential Test', () => {
    const paragraph = shallow(<Paragraph />)
    expect(paragraph).toHaveLength(1)
  })
  it('Applies custom styles', () => {
    const paragraph = shallow(<Paragraph style={{backgroundColor: '#000'}} />)
    expect(paragraph.prop('style')).toHaveProperty('backgroundColor', '#000')
  })
  it('Applies custom class names', () => {
    const paragraph = shallow(<Paragraph className='test-classname' />)
    expect(paragraph.hasClass('test-classname')).toEqual(true)
  })
  it('Adds children components', () => {
    const paragraph = shallow(<Paragraph>
      <strong>I am a child</strong>
    </Paragraph>)
    expect(paragraph.children()).toHaveLength(1)
  })
})
