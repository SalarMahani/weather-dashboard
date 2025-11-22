import { Navigate, Outlet } from 'react-router-dom'
import { getUser, type User } from '../utils/auth.ts'

export default function PublicLayout() {
  const userData = getUser()
  const user: User = userData ? JSON.parse(userData) : null

  const isLoggedIn = user && user.username // makes sure object is valid

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}
