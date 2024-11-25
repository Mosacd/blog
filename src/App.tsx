import './App.css'
import MainPage from './mycomponents/main/main'
import LoginForm from './mycomponents/signin/singin'
import SignUpForm from './mycomponents/signup/signup'
import { Route, Routes } from 'react-router-dom'
import  Layout  from './mycomponents/layout/layout'
import About from './mycomponents/about/about'
import WritePost from './mycomponents/write/write'
import Author from "./mycomponents/author/author"
import { useEffect } from 'react'
import { supabase } from "./supabase"

import { useAuthContext } from './context/auth/hooks/useAuthContext'
import AuthGuardLogIn from './mycomponents/route-guards/auth/forLogIn'
import AuthGuardForLogOut from './mycomponents/route-guards/auth/forLogOut'
import Profile from './mycomponents/profile/profile'

function App() {

  const { handleSetUser } = useAuthContext();

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        handleSetUser(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        handleSetUser(session)
      })

      return () => subscription.unsubscribe()
    }, [])
 
  return (
   
   
      <Routes>
          <Route  element={<Layout/>}>
              <Route path='/' element={<MainPage/>} />
              <Route path='/LoginForm' element={<AuthGuardLogIn><LoginForm/></AuthGuardLogIn>} />
              <Route path='/SignUpForm' element={<AuthGuardLogIn><SignUpForm/></AuthGuardLogIn>} />
              <Route path='/About' element={<About/>}/>
              <Route path='/Write' element={<WritePost/>}/>
              <Route path='/author/4' element={<Author/>}/>
              <Route path='/profile' element={<AuthGuardForLogOut><Profile/></AuthGuardForLogOut>}/>
          </Route>
        </Routes>
   
  )
}

export default App
