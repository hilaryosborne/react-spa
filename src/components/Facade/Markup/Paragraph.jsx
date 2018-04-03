import React from 'react'
import radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { typography } from 'scripts/styles'

@radium
export class Paragraph extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return <p {...this.props} style={{...typography.p, ...this.props.style}} className={classnames(this.props.className)} />
  }
}
