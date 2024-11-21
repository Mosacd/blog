import Nav from './nav/nav';
import React from 'react';
import Menu from './right-menu/menu';
import { useTranslation } from "react-i18next";
const Header: React.FC = () => {
  const { t } = useTranslation();
return(
    <header className=" mb-10 border-b bg-background text-white w-full fixed top-0 z-50 left-0 p-1">
      <div className="w-full px-10 py-4 flex items-center justify-between">
       
        <a className="text-2xl font-bold pl-3" href="/">{t("header.logo")}</a>

        <Nav/>
        <Menu/>
        
      </div>
    </header>
)

}

export default Header;