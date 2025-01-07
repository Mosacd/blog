import { Controller, useForm } from "react-hook-form";
import { Textarea } from "../../components/ui/textarea";
import { Input } from "../../components/ui/input";
// import { supabase } from "../../supabase";
import { useAuthContext } from "../../context/auth/hooks/useAuthContext";
// import { useMutation } from "@tanstack/react-query";
import { BlogValueTypes } from "./write";
import { useCreatePost } from "../../reactQuery/mutation/blog";
// import { Description } from "@radix-ui/react-dialog";


const BlogFormDefault = {
  title: "",
  description: "",
  image_file: null,
};

const WritePost = () => {
  const { control, handleSubmit } = useForm<BlogValueTypes>({
    defaultValues: BlogFormDefault,
  });

 const {user} = useAuthContext();

//  const createPostMutation = useMutation(async (formData: BlogValueTypes) => {
//   let imageUrl = null;

//   if (formData?.image_file) {
//     const { data: uploadData, error: uploadError } = await supabase.storage
//       .from('blog_images')
//       .upload(formData.image_file.name, formData.image_file);
//     if (uploadError) {
//       throw new Error(uploadError.message);
//     }
//     imageUrl = uploadData?.path;
//   }

//   const { error: insertError } = await supabase.from('blogs').insert({
//     title: formData.title,
//     description: formData.description,
//     image_url: imageUrl,
//     user_id: user?.user?.id,
//   });
//   if (insertError) {
//     throw new Error(insertError.message);
//   }
// });

// const onSubmit = async (formData: BlogValueTypes) => {
//   try {
//     await createPostMutation.mutateAsync(formData);
//     console.log('Blog post successfully created!');
//   } catch (error) {
//     console.error('Error creating blog post:', error);
//   }
// };


const { mutateAsync: createPostMutation } = useCreatePost(user?.user?.id);

const onSubmit = async (formData: BlogValueTypes) => {
  try {
    await createPostMutation(formData);
    console.log('Blog post successfully created!');
  } catch (error) {
    console.error('Error creating blog post:', error);
  }
};

  return (
    <div className="px-4 py-8 flex-grow w-max">
      <div className="container mx-auto">
        <div className="rounded-xl border bg-card text-card-foreground shadow max-w-3xl mx-auto">
          <div className="flex flex-col space-y-1.5 p-6">
            <h1 className="tracking-tight text-2xl font-bold">Write a New Post</h1>
          </div>
          <div className="p-6 pt-0">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              {/* Title */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="title"
                >
                  Title
                </label>
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="title"
                      placeholder="Enter your post title"
                      required
                    />
                  )}
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="content"
                >
                  Content
                </label>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="content"
                      placeholder="Write your content here"
                      required
                    />
                  )}
                />
              </div>

              {/* Cover Image */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="cover-image"
                >
                  Cover Image
                </label>
                <Controller
                  name="image_file"
                  control={control}
                  render={({ field: {onChange} }) => (
                    <Input
                      type="file"
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="cover-image"
                      accept="image/*"
                      onChange={(e) => 
                        { const file = e.target.files?.[0];
                          onChange(file);
                         }}
                    />
                  )}
                />
              </div>


              {/* Tags */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="tags"
                >
                  Tags
                </label>
                <div className="flex space-x-2">
                  <Input
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="tags"
                    placeholder="Add a tag"
                  />
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                    type="button"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2"></div>
              </div>

              {/* Publish Button */}
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
                type="submit"
              >
                Publish Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritePost;