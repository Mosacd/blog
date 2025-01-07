import { FillProfileInfoPayload } from "../../supabase/account/index.types";
import { useState } from "react";
import { mapProfileTableData } from "../../supabase/account";
import { useAuthContext } from "../../context/auth/hooks/useAuthContext";
import ProfileForm from "./profileForm.tsx";
import { useGetProfileInfo } from "../../reactQuery/query/profile/index.ts";
import { useFillProfile } from "../../reactQuery/mutation/profile/index.ts";


const Profile:React.FC = () =>{
    
    const {user, handleSetAvatar} = useAuthContext();

  const [isEditing, setIsEditing] = useState(false);

  const {mutate:fillProfileInfo} = useFillProfile(setIsEditing,isEditing)

  const handleSubmit = (fieldvalues:FillProfileInfoPayload) => {
    if (!user?.user?.id) {
      console.error("ID is undefined");
      return;
    }
    fillProfileInfo({values:fieldvalues, id:user?.user?.id});
  };




  const {data: profileData = { avatar_url: "",
    full_name_en: "",
    full_name_ka: "",
    phone_number: "",}} = useGetProfileInfo({ queryOptions: { select: mapProfileTableData } }, user?.user?.id);

  

    return(

      <>
       <div className="p-6">
      {isEditing ? (
        <ProfileForm onFormSubmit = {handleSubmit} profilePayload = {profileData} /*setProfilePayload ={setProfilePayload}*/ />
      ) : (
        <div className="space-y-4">
          
        
            <div className="flex justify-center">
              <img
                src={profileData.avatar_url}
                alt="Avatar"
                className="h-24 w-24 rounded-full border object-cover"
              />
            </div>
         

          
          <div className="flex flex-col gap-1 space-y-2">
            <div>
              <strong>Full Name (English):</strong> {profileData.full_name_en || "Not provided"}
            </div>
            <div>
              <strong>Full Name (Georgian):</strong> {profileData.full_name_ka || "Not provided"}
            </div>
            <div>
              <strong>Phone Number:</strong> {profileData.phone_number || "Not provided"}
            </div>
          </div>

          
          <div className="mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-primary text-white dark:text-black rounded-md hover:bg-primary/90"
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
      
        
      </>
    )

}

export default Profile;