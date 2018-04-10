import React from 'react'
import radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {connect} from 'react-redux'
import {mediaQueryBelow} from 'scripts/styles'

const styling = {
  base: {
    ...mediaQueryBelow('md', {
      paddingTop: '1rem',
      paddingBottom: '1rem',
      position: 'fixed',
      top: '3.8rem',
      left: '0',
      right: '0'
    })
  }
}

@connect(state => state)
@radium
export class Menu extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object
  }

  getVisibility () {
    return _.get(this.props, 'facade.menu.toggle', false)
  }

  render () {
    return (<div
      className={classnames('d-md-block', {'d-none': !this.getVisibility(), 'd-block': this.getVisibility()}, this.props.className)}
      style={{...styling.base, ...this.props.style}}>
      {this.props.children}
    </div>)
  }
}
