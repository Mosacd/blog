import { FillProfileInfoPayload } from "@/supabase/account/index.types";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { fillProfileInfo, getProfileInfo } from "../../supabase/account";
import { useAuthContext } from "../../context/auth/hooks/useAuthContext";
import ProfileForm from "./profileForm.tsx";


const Profile:React.FC = () =>{
    
    const {user, handleSetAvatar} = useAuthContext();

  const [profilePayload, setProfilePayload] = useState<FillProfileInfoPayload>({
    avatar_url: "",
    full_name_en: "",
    full_name_ka: "",
    phone_number: "",
  });
  
  // useEffect(() =>{
  //   if(user){
  //     getProfileInfo(user?.user.id).then(res => console.log(res))
  //   }
    
  // },[user])

  const {mutate: handleFillProfileInfo} = useMutation({
    mutationKey: ["fill-profile-info"],
    mutationFn: fillProfileInfo,
    onSuccess: () => {
      setIsEditing(false);
      console.log("Profile updated successfully!");
    },
    onError: (error: any) => {
      console.log(`Error updating profile: ${error.message}`);
    },
  })


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      handleFillProfileInfo({...profilePayload, id: user?.user?.id });
  };

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      getProfileInfo(user.user.id).then((res) => {
        if ( res?.data && Array.isArray(res.data) && res?.data?.length > 0) {

          const { avatar_url, full_name_ka, full_name_en, phone_number } = res.data[0];
          console.log({ avatar_url, full_name_ka, full_name_en, phone_number });

          handleSetAvatar(avatar_url);
      
          setProfilePayload({
            avatar_url: avatar_url || "",
            full_name_en: full_name_en || "",
            full_name_ka: full_name_ka || "",
            phone_number: phone_number || "",
          });
        } else {
          console.warn("No data available");
        }
      });
    }
  }, [user]);
  

    return(

      <>
       <div className="p-6">
      {isEditing ? (
        <ProfileForm onFormSubmit = {handleSubmit} profilePayload = {profilePayload} setProfilePayload ={setProfilePayload} />
      ) : (
        <div className="space-y-4">
          
        
            <div className="flex justify-center">
              <img
                src={profilePayload.avatar_url}
                alt="Avatar"
                className="h-24 w-24 rounded-full border object-cover"
              />
            </div>
         

          
          <div className="flex flex-col gap-1 space-y-2">
            <div>
              <strong>Full Name (English):</strong> {profilePayload.full_name_en || "Not provided"}
            </div>
            <div>
              <strong>Full Name (Georgian):</strong> {profilePayload.full_name_ka || "Not provided"}
            </div>
            <div>
              <strong>Phone Number:</strong> {profilePayload.phone_number || "Not provided"}
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