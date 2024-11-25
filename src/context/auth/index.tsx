import {createContext, PropsWithChildren, useState} from "react";

type AuthContextType = any;

export const AuthContext = createContext<AuthContextType>({
    user: null,
    handleSetUser: () => {},
    avatar: "https://api.dicebear.com/9.x/pixel-art/svg",
    handleSetAvatar: () => {}
  });

export const AuthProvider:React.FC<PropsWithChildren> = ({children}) => {
    const [user, setUser] = useState<any>();

    const handleSetUser = (user: any) =>{
        setUser(user);
    }

    const [avatar, setAvatar] = useState<string>("https://api.dicebear.com/9.x/pixel-art/svg");

    const handleSetAvatar = (avatar: string) =>{
        setAvatar(avatar);
    }

    return (<AuthContext.Provider value={{ user ,handleSetUser, avatar,handleSetAvatar }}>{children}</AuthContext.Provider>)

};