import React from 'react'
import {AuthContext} from './UserAuth'
function Dashboard() {
    const token = React.useContext(AuthContext);
    console.log(token);
  return (
    <div>Dashboard {token}</div>
  )
}

export default Dashboard