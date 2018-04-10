import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export const styling = {
  base: {}
}

@radium
export class Btn extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object
  }

  static defaultProps = {
    className: '',
    style: {}
  }

  render () {
    return (<button style={{...styling.base, ...this.props.style}} className={classnames('btn', this.props.className)}>{this.props.children}</button>)
  }
}
