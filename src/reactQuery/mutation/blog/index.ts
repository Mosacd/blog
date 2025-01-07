import { useNavigate } from "react-router-dom";
import { BlogValueTypes, createPost } from "../../../mycomponents/write/write";
import { useMutation } from "@tanstack/react-query";



export const useCreatePost = (userId: string | undefined) => {
    // const queryClient = useQueryClient();
  const navigate = useNavigate();

    return useMutation<void, Error, BlogValueTypes>({
      mutationFn: (formData) => createPost(formData, userId),
      onSuccess: () => {
        console.log('Blog post successfully created!');
        navigate("/")
        // queryClient.invalidateQueries(['blogs']); // Invalidate blog list queries
      },
      onError: (error) => {
        console.error('Error creating blog post:', error.message);
      },
    });
  };
  