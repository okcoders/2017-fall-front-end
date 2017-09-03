import React, { Component } from 'react'

class AddNewAlumn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      success: 'unknown',
      firstName: '',
      lastName: '',
      semester: ''
    }

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleSemesterChange = this.handleSemesterChange.bind(this)
    this.submit = this.submit.bind(this)
    this.submissionResult = this.submissionResult.bind(this)
  }

  handleFirstNameChange(event) {
    const newName = event.target.value
    this.setState({firstName: newName})
  }

  handleLastNameChange(event) {
    const newName = event.target.value
    this.setState({lastName: newName})
  }

  handleSemesterChange(event) {
    const newSemester = event.target.value
    this.setState({semester: newSemester})
  }

  submit(e) {
    e.preventDefault()
    this.setState({success: 'unkown'})
    if(this.validInputs(this.state)) {
      this.setState({success: 'success'})
    } else {
      this.setState({success: 'failure'})
    }
  }

  validInputs(newAlumn) {
    if (newAlumn.firstName && newAlumn.lastName && newAlumn.semester) {
      return true
    } else {
      return false
    }
  }

  submissionResult(success) {
    return {
      'unkown': <span></span>,
      'success': <div>Success!!</div>,
      'failure': <div>Please try again</div>
    }[success]
  }

  render() {
    const submissionResult = this.submissionResult(this.state.success)
    return (
      <div>
      {submissionResult}
      <form>
      <label>
      First Name:
      <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
      </label>
      <label>
      Last Name:
      <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
      </label>
      <label>
      Semester:
      <input type="text" value={this.state.semester} onChange={this.handleSemesterChange} />
      </label>
      <label>
      <button onClick={this.submit}>
      Submit
      </button>
      </label>
      </form>
      </div>
    )
  }
}

export default AddNewAlumn
