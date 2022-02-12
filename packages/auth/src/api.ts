export type GetUserOptions = { baseUrl: string; userId?: string }

export type SignInOptions = { email: string; password: string }

export type SignUpOptions = {
  email: string
  firstName: string
  lastName: string
  password: string
  timezone: string
}

export const setCookie = (host: string) => {
  return fetch(`${host}/info/c`, {
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'omit',
    method: 'GET',
    mode: 'cors',
  })
}

export const getUser = ({ baseUrl, userId }: GetUserOptions) => {
  return fetch(`${baseUrl}/api/v1/users/${userId}`, {
    headers: new Headers({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    }),
    credentials: 'include',
    method: 'GET',
    mode: 'cors',
  }).then((res) => res.json())
}

export const signIn = (host: string, options: SignInOptions) => {
  return fetch(`${host}/api/v1/auth/login`, {
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(options),
    credentials: 'omit',
    method: 'POST',
    mode: 'cors',
  }).then((res) => res.json())
}

export const signOut = (host: string) => {
  return fetch(`${host}/api/v1/auth/logout`, {
    headers: new Headers({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    }),
    credentials: 'include',
    method: 'POST',
    mode: 'cors',
  })
}

export const signUp = (host: string, data: SignUpOptions) => {
  return fetch(`${host}/api/v1/users`, {
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(data),
    credentials: 'omit',
    method: 'POST',
    mode: 'cors',
  }).then((res) => res.json())
}
