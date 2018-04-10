import React from 'react'
// import _ from 'lodash'
import radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const styling = {
  base: {}
}

@radium
export class Wrapper extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.any
  }

  static defaultProps = {
    className: '',
    style: {}
  }

  render () {
    return (<div className={classnames(this.props.className)} style={{...styling.base, ...this.props.style}}>
      {this.props.children}
    </div>)
  }
}
