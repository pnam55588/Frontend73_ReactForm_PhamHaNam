import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { changeChar1 } from '../store/actions/actChangeChar'
import Table from './Table'

class ReactForm extends Component {
  render() {
    return (
      <div>
        <Form />
        <Table />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    result: state.accountReducer.example
})

const mapDispatchToProps = dispatch => ({
    ex: (char) => dispatch(changeChar1(char))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReactForm)
