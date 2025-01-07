import './App.css'
import { useEffect } from 'react'
import { supabase } from "./supabase"
import { useAuthContext } from './context/auth/hooks/useAuthContext'
import AppRoutes from './routes'

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
 
    
  return <AppRoutes/>
  
}

export default App
