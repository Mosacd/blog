import { supabase } from "..";


export type Blog = {
     created_at: string;
     id: number;
     image_url: string | null;
     description: string | null;
     title:string | null;
     user_id:string | null;
 }

export const getBlogsList = async (): Promise<Blog[]> => {
     const { data, error } = await supabase.from('blogs').select('*');
     if (error) {
         console.error('Error fetching blogs:', error.message);
         return [];
     }
     return data || [];
 };
 