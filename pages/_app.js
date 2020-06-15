import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

import React from 'react'
import App from 'next/app'

class AppWrapper extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <Component {...pageProps} />
    )
  }
}

export default AppWrapper
