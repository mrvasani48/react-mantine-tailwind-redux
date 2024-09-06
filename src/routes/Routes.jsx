import {Routes,Route} from "react-router-dom"
import DashboardsPage from "../pages/DashboardsPage"
import NotFoundPage from '../component/common/NotFoundPage';
import Name from "../component/dashboards/Name";
import AuthLayout from "../layout/AuthLayout";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/"  element={<DashboardsPage />}/> 
        <Route path='/name' element={<AuthLayout>
          <Name />
        </AuthLayout>} />
        <Route path="*"  element={<NotFoundPage />}/> 
      </Routes>
  )
}

export default AppRoutes