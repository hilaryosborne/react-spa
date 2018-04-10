import React from 'react'
import radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const styling = {
  base: {
    padding: '.6rem'
  }
}

@connect(state => state)
@radium
export class MenuExternalLink extends React.Component {
  static propTypes = {
    to: PropTypes.any,
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
    dispatch: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.doClickAction = this.doClickAction.bind(this)
  }

  doClickAction () {
    this.props.dispatch({'type': 'FACADE_MENU_HIDE'})
  }

  render () {
    return (<a href={this.props.to}
      target='_blank' rel='noopener noreferrer'
      onClick={this.doClickAction}
      className={classnames('d-block d-md-inline', this.props.className)}
      style={{...styling.base, ...this.props.style}}>{this.props.children}</a>)
  }
}
