import { UserProps as User } from '@mh-jack/types'
import React, { useEffect, useState, createContext, useContext } from 'react'
import jwtDecode, { JwtPayload } from 'jwt-decode'
import { getUser, setCookie, signIn, SignInOptions, signOut, signUp, SignUpOptions } from './api'

interface JwtDecoded extends JwtPayload {
  artistBrandId?: string
  exp?: number
  iat?: number
  userId?: string
}

type UserContextType = {
  user: User | null
  userLoading: boolean
  loggedIn: boolean
  userPermissions?: string[]
  userId: string | undefined
  signOut: () => void
  updateUser: (payload?: any) => void
  refreshUserData: (userId: string) => Promise<User>
  signIn: (options: SignInOptions) => Promise<{
    user: User | null
    error: Error | null
    data: any | null
  }>
  signUp: (options: SignUpOptions) => Promise<{
    user: User | null
    error: Error | null
    data: User | null
  }>
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ baseUrl, children }: any) => {
  const [userLoading, setUserLoading] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)

  /**
   * Makes an API call to '/info/c' on mount
   */
  useEffect(() => {
    setCookie(baseUrl)
  }, [])

  /**
   * Fetches user data and updates state
   * @param {string} userId
   * @returns Promise<User>
   */
  const refreshUserData = async (userId: string, artistBrandId?: string): Promise<User> => {
    setUserLoading(true)
    let data = await getUser({ baseUrl, userId })
    if (!!artistBrandId) {
      data.artistBrandId = artistBrandId
    }
    setUser(data)
    setUserLoading(false)
    return data
  }

  /**
   * Fetches user data if a JWT token is
   * present in local storage
   */
  useEffect(() => {
    const localJWT = localStorage.getItem('jwt')
    if (localJWT) {
      const decoded = jwtDecode(localJWT) as JwtDecoded
      if (decoded?.userId) refreshUserData(decoded?.userId, decoded?.artistBrandId)
    }
  }, [localStorage.getItem('jwt')])

  const value = {
    user,
    userLoading,
    userPermissions: user?.permissions || [],
    loggedIn: Boolean(user),
    userId: user?.id,
    refreshUserData,
    signIn: (options: SignInOptions) => signIn(baseUrl, options),
    signUp: (options: SignUpOptions) => signUp(baseUrl, options),
    signOut: (e?: any) => {
      e?.preventDefault()
      signOut(baseUrl)
      setUser(null)
      //  await analytics.reset()
      localStorage.removeItem('jwt')
      //localStorage.removeItem(CHANNEL_MEMBERSHIP_KEY)
      if (window) window.location.href = '/'
    },
    updateUser: (payload?: any) => {
      setUser((u) => ({ ...u, ...payload }))
      setUserLoading(false)
    },
  }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
