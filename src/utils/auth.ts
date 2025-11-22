export interface User {
  username: string
  language: 'en' | 'fa'
  theme: 'dark' | 'light'
}

//explanation: this is our local storage functions
export function setUser(user: User) {
  localStorage.setItem('user', JSON.stringify(user))
}

export function getUser(): string | null {
  try {
    return localStorage.getItem('user')
  } catch (e) {
    throw new Error(`Unable to get user from local storage:${e}`)
  }
}
export function clearUser() {
  localStorage.removeItem('user')
}
