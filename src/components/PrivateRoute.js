import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { auth } = useSelector(store => store)

  if (!auth || auth === 'undefined') {
    return <Navigate to="/signin"/>
  }

  return children; 
}

export default PrivateRoute