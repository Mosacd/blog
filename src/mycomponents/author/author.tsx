import ProfileCard from "./profilecard/profilecard"
import {Tabs,TabsList, TabsTrigger,TabsContent} from "../../components/ui/tabs"
import AuthorAbout from "./authorAbout/authorAbout"
import AuthorAccount from "./authorAccount/authorAccount"

const Author = () => {

    return(
     
        <div className="w-full flex flex-col m-auto items-center gap-10 ">
          
        <ProfileCard />

        <Tabs defaultValue="Articles" className=" text-center m-auto w-full">
  <TabsList className="flex items-center">
    <TabsTrigger value="Articles" className="w-1/2 dark: bg-transparent" >Account</TabsTrigger>
    <TabsTrigger value="About" className="w-1/2 dark: bg-transparent">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="Articles"><AuthorAccount/></TabsContent>
  <TabsContent value="About"  ><AuthorAbout/></TabsContent>
</Tabs>
        </div>
           
    )

}



export default Author;