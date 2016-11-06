import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
//import { setVisibilityFilterAsync } from '../actions'
import Link from '../common/components/Link'
//import { bindActionCreators } from 'redux'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

/*const mapDispatch2ToProps = (dispatch) => {
  return {
    onClickAsync: bindActionCreators(setVisibilityFilterAsync, dispatch)
  }
}*/

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
