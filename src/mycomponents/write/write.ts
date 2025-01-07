import { supabase } from "../../supabase";

export type BlogValueTypes = {
    title: string;
    description: string;
    image_file: null | File;
  };

export const createPost = async (
    formData: BlogValueTypes,
    userId: string | undefined
  ): Promise<void> => {
    if (!userId) {
      throw new Error('User ID is not defined.');
    }
  
    let imageUrl: string | null = null;
  
    // Upload image if present
    if (formData?.image_file) {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('blog_images')
        .upload(formData.image_file.name, formData.image_file);
  
      if (uploadError) {
        console.error('Error uploading image:', uploadError);
        throw new Error(uploadError.message);
      }
  
      imageUrl = uploadData?.path; // Store the uploaded image path
    }
  
    // Insert blog post into database
    const { error: insertError } = await supabase.from('blogs').insert({
      title: formData.title,
      description: formData.description,
      image_url: imageUrl,
      user_id: userId,
    });
  
    if (insertError) {
      console.error('Error inserting blog post:', insertError);
      throw new Error(insertError.message);
    }
  };
  