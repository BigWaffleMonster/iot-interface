import {Route, Routes} from 'react-router-dom'
import HomePage from '../HomePage'
import VentPage from '../VentPage/VentPage'
import Buttons from '../Buttons'

export const useRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/vent'} element={<VentPage/>} />
      <Route path={'/buttons'} element={<Buttons/>} />
      <Route path='*' element={<h1>404</h1>} />
    </Routes>
  )
}