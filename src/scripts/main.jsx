import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import { RootPaths } from 'containers'

$(document).ready(() => {
  ReactDOM.render(<RootPaths />, document.getElementById('root'))
})
