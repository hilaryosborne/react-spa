import React from 'react'
import { H1 } from 'components/Facade'
import { SharedWrapper } from 'components/Shared'

export class Home extends React.Component {
  render () {
    return (<SharedWrapper>
      <H1>Hello</H1>
    </SharedWrapper>)
  }
}
