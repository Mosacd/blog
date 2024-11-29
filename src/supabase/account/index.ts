import { supabase } from "..";

type FillProfileInfoPayloadWithId = {
     phone_number:string;
     full_name_ka: string;
     full_name_en: string;
     avatar_url: string;
     id?:string;
 }


export const fillProfileInfo = (payload:FillProfileInfoPayloadWithId) =>{

     return supabase.from("profiles").upsert(payload as any).throwOnError();
}

export const getProfileInfo = (id:string | number) => {
     return supabase.from("profiles").select("*").eq("id",id);
}