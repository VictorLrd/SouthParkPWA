import React from 'react'
import { FaPowerOff } from 'react-icons/fa'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import allTheActions from '../../actions'

const Logout = props => {
  const logout = e => {
    console.log('jfskd')
    e.preventDefault()
    props.actions.user.logoutCall()
  }
  return <FaPowerOff onClick={logout} />
}

const mapDispatchToProps = () => dispatch => ({
  actions: {
    user: bindActionCreators(allTheActions.user, dispatch)
  }
})

export default connect(null, mapDispatchToProps)(Logout)
