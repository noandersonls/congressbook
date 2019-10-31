import React, { Component } from 'react'

import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'


export default class Content extends Component {
  render() {
    return( 
        <div className='content'>
          <Header/>
          <div className='content__container'>
            {this.props.children}
          </div>
          <Footer/>
        </div>
    )
  } 
}