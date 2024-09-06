import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthLayout = ({children}) => {
  const {is_login} = useSelector(store=>store.auth)

  if(!is_login) {
    return  <Navigate to='/'/>
  }
  return (
    <div>AuthLayout
     {children}
    </div>
  )
}

export default AuthLayout