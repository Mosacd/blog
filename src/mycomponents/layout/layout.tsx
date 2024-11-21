import Header from "../header/header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../../components/theme-provider"
const Layout:React.FC = () =>{

    return(
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
      
      <Header/>
      
      <div className='mt-20 w-max'>
        <Outlet/>
      </div>
      
      </ThemeProvider>
    )
}

export default Layout;