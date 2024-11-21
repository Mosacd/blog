import './App.css'
import MainPage from './mycomponents/main/main'
import LoginForm from './mycomponents/signin/singin'
import SignUpForm from './mycomponents/signup/signup'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import  Layout  from './mycomponents/layout/layout'
import About from './mycomponents/about/about'
import WritePost from './mycomponents/write/write'

function App() {
 
  return (
   
    <BrowserRouter>
      <Routes>
          <Route  element={<Layout/>}>
              <Route path='/' element={<MainPage/>} />
              <Route path='/LoginForm' element={<LoginForm/>} />
              <Route path='/SignUpForm' element={<SignUpForm/>} />
              <Route path='/About' element={<About/>}/>
              <Route path='/Write' element={<WritePost/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
