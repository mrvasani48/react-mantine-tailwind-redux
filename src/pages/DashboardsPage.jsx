import { Button } from "@mantine/core"
import { useDispatch } from "react-redux"
import { SET_LOGIN } from "../redux/reducers/auth.reducer"
import { Link } from "react-router-dom"

const DashboardsPage = () => {
  const dispatch = useDispatch()
  const handleClick =()=>{
    dispatch(SET_LOGIN(true))
  }
  return (
    <div> 
      <Button onClick={handleClick}>CLick me</Button>
      <Link to={'/name'}>name</Link>
    </div>
  )
}

export default DashboardsPage