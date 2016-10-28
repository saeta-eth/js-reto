import React, { Component } from 'react'
import _ from 'lodash'

export default class Form extends Component {
  constructor (props) {
    super(props)
    this.productKepper = {
      ProductName : '',
      Brand: '',
      Width: '',
      Category: '',
      Height: '',
      Notes: ''
    }
    this.state = {
      error: {
        ProductName : false,
        Brand: false,
        Width: false,
        Category: false,
        Height: false,
        Notes: false
      }
    }
    this.changeInput = this.changeInput.bind(this)
    this.checkForm = this.checkForm.bind(this)
  }

  changeInput (value, field) {
    this.productKepper[field] = value
  }

  checkForm () {
    let emptyFields = {}
    for (let key in this.productKepper) {
      if (!this.productKepper[key].length) {
        Object.assign(emptyFields, {
          [key] : true
        })
      }
    }
    if (_.isEmpty(emptyFields)) {
      this.props.onSuccess(this.productKepper)
    } else {
      this.setState({
        error : _.defaults(emptyFields, {
          ProductName : false,
          Brand: false,
          Width: false,
          Category: false,
          Height: false,
          Notes: false
        })
      })
    }
  }

  render () {
    return (
      <div className='form-container'>
        <div className='first-column'>
          <div className='form-product-name'>
            <label>Product Name</label>
            <input
              type='text'
              className={this.state.error['ProductName'] ? 'error' : ''}
              onChange={(e) => this.changeInput(e.target.value, 'ProductName')}
            />
          </div>
          <div className='form-brand'>
            <label>Brand</label>
            <input
              type='text'
              className={this.state.error['Brand'] ? 'error' : ''}
              onChange={(e) => this.changeInput(e.target.value, 'Brand')}
            />
          </div>
          <div className='form-width'>
            <label>Width</label>
            <input
              type='text'
              className={this.state.error['Width'] ? 'error' : ''}
              onChange={(e) => this.changeInput(e.target.value, 'Width')}
            />
          </div>
        </div>
        <div className='second-column'>
          <div className='form-category'>
            <label>Category</label>
            <input
              type='text'
              className={this.state.error['Category'] ? 'error' : ''}
              onChange={(e) => this.changeInput(e.target.value, 'Category')}
            />
          </div>
          <div className='form-height'>
            <label>Height</label>
            <input
              type='text'
              className={this.state.error['Height'] ? 'error' : ''}
              onChange={(e) => this.changeInput(e.target.value, 'Height')}
            />
          </div>
        </div>
        <div className='full-row'>
          <label>Notes</label>
          <textarea
            className={this.state.error['Notes'] ? 'error' : ''}
            onChange={(e) => this.changeInput(e.target.value, 'Notes')}
          >
          </textarea>
        </div>
        <hr></hr>
        <div className='container-save'>
          <button className='button-orange' onClick={this.checkForm}>
            Save
          </button>
        </div>
      </div>
    )
  }
}