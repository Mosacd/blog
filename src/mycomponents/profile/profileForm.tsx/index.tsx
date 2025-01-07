import { FillProfileInfoPayload } from "../../../supabase/account/index.types";
// import { Dispatch } from "react";
// import { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const ProfileForm: React.FC<{ onFormSubmit: (fieldvalues:FillProfileInfoPayload) => void,
     profilePayload:FillProfileInfoPayload,
     /*setProfilePayload: Dispatch<SetStateAction<FillProfileInfoPayload>>*/
 }> = ({ onFormSubmit, profilePayload, /*setProfilePayload*/ }) => {

  const { t } = useTranslation();

  const { register, handleSubmit, formState: { errors }, } = useForm<FillProfileInfoPayload>({
    defaultValues: profilePayload,
  });

    return(
<div className="p-6 pt-0">
        <form className="space-y-4" onSubmit={handleSubmit(onFormSubmit)}>
          

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t("profileForm.fullNameEn")}
            </label>
            <input
             
              id="fullNameEn"
              {...register("full_name_en", { required: t("profileForm.validation.required") })}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
            {errors.full_name_en && (
            <p className="text-sm text-red-500">{errors.full_name_en.message}</p>
          )}
          </div>
            
          <div className="space-y-2">
            <label
              htmlFor="fullNameKa"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
             {t("profileForm.fullNameKa")}
            </label>
            <input
             
              id="fullNameKa"
              {...register("full_name_ka", { required: t("profileForm.validation.required") })}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
            {errors.full_name_ka && (
            <p className="text-sm text-red-500">{errors.full_name_ka.message}</p>
          )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="avatarUrl"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t("profileForm.AvatarURL")}
            </label>
            <input
                type= "url"
              id="avatarUrl"
            {...register("avatar_url")}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
            {errors.avatar_url && (
            <p className="text-sm text-red-500">{errors.avatar_url.message}</p>
          )}
          </div>



          <div className="space-y-2">
            <label
              htmlFor="phoneNumber"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
             {t("profileForm.phoneNum")}
            </label>
            <input
            
              id="phoneNumber"
              {...register("phone_number", {
                required: t("This field is required"),
                minLength: { value: 10, message: t("Minimum length is 10 digits") },
                maxLength: { value: 15, message: t("Maximum length is 15 digits") },
              })}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
            {errors.phone_number && (
            <p className="text-sm text-red-500">{errors.phone_number.message}</p>
          )}
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
          >
            {t("Submit")}
          </button>
        </form>
      </div>
    )
}


export default ProfileForm;