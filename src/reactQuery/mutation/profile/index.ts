import { fillProfileInfo } from "../../../supabase/account";
import { FillProfileInfoPayload } from "../../../supabase/account/index.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PROFILE_MUTATION_KEYS } from "./enum";
import { PROFILE_QUERY_KEYS } from "../../../reactQuery/query/profile/enum";






// useMutation({
//     mutationKey: ["fill-profile-info"],
//     mutationFn: fillProfileInfo,
//     onSuccess: () => {
//       setIsEditing(false);
//       console.log("Profile updated successfully!");
//     },
//     onError: (error: any) => {
//       console.log(`Error updating profile: ${error.message}`);
//     },
//   })


export const useFillProfile = (setIsEditing: (f: boolean) => void, isEditing:boolean) => {
   
    const queryClient = useQueryClient(); 

    return useMutation<
      void, // Updated to reflect the `void` return type of `mutationFn`
      Error,
      { id: string; values: FillProfileInfoPayload }
    >({
      mutationKey: [PROFILE_MUTATION_KEYS.PROFILE],
      mutationFn: fillProfileInfo, // Updated to use the void-returning function
      onSuccess: (_, { id }) => {
        setIsEditing(false);
        console.log(isEditing)
        console.log('Profile updated successfully!');
        queryClient.invalidateQueries({
            queryKey: [PROFILE_QUERY_KEYS.PROFILE, id],
            exact: true, // Ensures only the exact query is invalidated
          });
      },
      onError: (error: Error) => {
        console.error('Error creating user:', error);
      },
    });
  };



  