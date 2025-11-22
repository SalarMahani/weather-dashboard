import { Navigate, Outlet } from 'react-router-dom'
import { getUser } from '../utils/auth.ts'

export default function ProtectedLayout() {
  const userData = getUser()
  const user = userData ? JSON.parse(userData) : null

  const isLoggedIn = user && user.username // makes sure object is valid

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
