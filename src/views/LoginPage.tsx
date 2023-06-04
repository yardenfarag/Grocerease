import React, { useEffect } from 'react'
import { Login } from '../components/Login'
import { userActions } from '../store/user'
import { useDispatch, useSelector } from 'react-redux'
import { User } from '../models/user'
import { RootState } from '../store/index'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector<RootState, User | null>(state => state.user.loggedInUser)
  const loginHandler = (email: string, password: string) => {
    dispatch(userActions.login({ email, password }))
  }
  useEffect(() => {
    if (user) {
      navigate('/store')
    }
  },[user])
  return (
    <div className='login-page'>
      <Login onLogin={loginHandler} />
    </div>
  )
}
