
import { connect } from 'react-redux'
import Form from '../components/Form'
import { updateName } from '../actions'

const mapStateToProps = ({form, errors}) => ( { form, errors } )

const mapDispatchToProps = (dispatch) => (
  {
    onSubmit: () => {},
    onNameChange: (name) => dispatch(updateName(name))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Form)
