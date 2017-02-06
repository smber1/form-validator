
import React from 'react'

const style = {
  form: {
    border: '1px solid #eee',
    padding: '5px',
    width: '300px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column'
  },
  field: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px'
  },
  label: {
  },
  input: {
    width: '70%'
  },
  submit: {
    marginTop: '10px'
  }
}

const Form = () => (
  <form style={style.form}>
    <div style={style.field}>
      <label style={style.label}>Name:</label>
      <input style={style.input} type="text" name="name" />
    </div>
    <input style={style.submit} type="submit" value="Submit" />
  </form>
)

export default Form
