import { DropdownMenu , DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Link } from 'react-router-dom';
import { ModeToggle } from '../../../components/mode-toggle';
import { ComboboxDemo } from '../../../components/ui/combobox';
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { useAuthContext } from '../../../context/auth/hooks/useAuthContext';
import { useMutation } from '@tanstack/react-query';
import { logout } from '../../../supabase/auth/index';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { AvatarFallback } from '../../../components/ui/avatar';
const Menu: React.FC = () =>{
  const { t } = useTranslation();
  

const handleChangeLanguage = (lang:string) => {
  i18n.changeLanguage(lang)
}
const {user,avatar} = useAuthContext();

const{mutate:handleLogout} = useMutation({mutationKey:['logout'], mutationFn:logout})
    return(
        <div className='flex gap-3 '>
          {user ?(<>
            <Link to={"/profile"} className="w-10 h-10 border-solid border-blue-800 border-2 rounded p-px" >
            <Avatar >
                  <AvatarImage src={avatar} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                </Link>
       
              <button onClick={() => handleLogout()} className='bg-blue-600 text-white'>Logout</button>
              </>
          )
          :(
            <Link  to="/LoginForm"><button className='bg-blue-600 text-white '>{t("header.sign_in")}</button></Link>
          )}
          
          <ComboboxDemo/>
          
          
          <DropdownMenu>
  <DropdownMenuTrigger className="bg-background">
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-black dark:text-white"
    >
      <path
        d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
        fill="currentColor"
      ></path>
      <path
        d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
        fill="currentColor"
      ></path>
      <path
        d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
        fill="currentColor"
      ></path>
      <path
        d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
        fill="currentColor"
      ></path>
    </svg>
  </DropdownMenuTrigger>

  <DropdownMenuContent className="bg-popover text-black dark:bg-gray-800 dark:text-white">
    <DropdownMenuLabel onClick={() => handleChangeLanguage("en")} className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors focus:bg-accent focus:text-accent-foreground dark:focus:bg-gray-700 dark:focus:text-white">
    {t("header.english")}
    </DropdownMenuLabel>
    <DropdownMenuLabel onClick={() => handleChangeLanguage("ka")} className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm transition-colors focus:bg-accent focus:text-accent-foreground dark:focus:bg-gray-700 dark:focus:text-white">
    {t("header.georgian")}
    </DropdownMenuLabel>
  </DropdownMenuContent>
</DropdownMenu>

     
      <ModeToggle/>
        </div>
    )
}

export default Menu;