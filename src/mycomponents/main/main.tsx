import React, { useCallback, useEffect, useRef, useState } from "react";
import Sidebar from "./sidebar/sidebar";
import { useTranslation } from "react-i18next";
import { getFilteredBlogsList } from "../../supabase/blogsList";
import { Blog, BlogsFilterValueTypes } from "../../supabase/blogsList";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../components/ui/input";
import underscore from "underscore";
import { useSearchParams } from "react-router-dom";
import qs from 'qs';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
// const blogsFilterDefaultValues = {
//     searchText: "",
// }
const MainPage: React.FC = () => {
    const { t } = useTranslation();
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const parsedQueryParams = qs.parse(searchParams.toString());
   
     const { control, watch } = useForm<BlogsFilterValueTypes>({
        defaultValues: {
            searchText: parsedQueryParams?.searchedtext?.toString()
        }
      });



    
   
      
      const didMountRef = useRef(false); // Ref to track component mount status

    useEffect(() => {
        const parsedSearchParams = qs.parse(searchParams.toString());
        const searchedtext = parsedSearchParams?.searchedtext;
        console.log(searchedtext);
        // getBlogsList().then((res) => {
        //     const blogsList = Array.isArray(res) ? res : [];
        //     setBlogs(blogsList);
        //     setIsLoading(false);
        //     console.log(blogsList);

            
        // });

        getFilteredBlogsList({ searchText: searchedtext?.toString() || ""}).then((res) => {
            const blogsList = Array.isArray(res) ? res : [];
            setBlogs(blogsList);
            setIsLoading(false);
          });
    }, []);

  

//    const onSubmit = (searchFormValues: BlogsFilterValueTypes) => {
//     setIsLoading(true);
//     getFilteredBlogsList(searchFormValues).then(res => {
//         const blogsList = Array.isArray(res) ? res : [];
//         setBlogs(blogsList);
//         setIsLoading(false);
//     })
//    }

const watchedSearchText = watch("searchText") || "";
const searchedtext = watchedSearchText;


const fetchBlogsList = useCallback(
    underscore.debounce((searchValue:string) => {
      console.log("Fetching for:", searchValue); // Debugging
   
      getFilteredBlogsList({ searchText: searchValue }).then((res) => {
        const blogsList = Array.isArray(res) ? res : [];
        setBlogs(blogsList);

      });
    }, 1000),
    [] // Dependencies (empty for debounce)
  );
  
useEffect(() =>{
    if(didMountRef.current){
        fetchBlogsList(watchedSearchText);
        setSearchParams( qs.stringify({searchedtext},{skipNulls: true, filter: (_, value) =>
            {
                return value || undefined;
            },
         }),
        );
    } else{
        didMountRef.current = true;
    }

}, [watchedSearchText,fetchBlogsList])


if (isLoading) {
    return <p>{t('mainpage.loading')}</p>;
}

    return (
        <main className="px-4 py-8 flex-grow">
            <div className="container mx-auto flex flex-col md:flex-row gap-8">
                <section className="md:w-2/3 space-y-8 flex flex-col">
                <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="title"
                >
                  Filter
                </label>
                <Controller
                  name="searchText"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="title"
                      placeholder="Enter saerch text..."
                      required
                     
                    />
                  )}
                />
              </div>
                    {blogs.map((blog) => {
                       
                        const blogImageUrl = blog?.image_url
                            ? `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/blog_images/${blog?.image_url}`
                            : "https://pkdqnffhfhajyeiqgkci.supabase.co/storage/v1/object/public/blog_images/grubber_storm_king_4k_5k_hd_my_little_pony_the_movie.jpg";
                        console.log(blogImageUrl)

                        const creationDate = dayjs(blog.created_at);
                        const formattedDate = creationDate.isAfter(dayjs().subtract(1, "day"))
                        ? creationDate.fromNow() // "x hours ago" or "x minutes ago"
                        : creationDate.format("HH:mm - DD/MM/YYYY");

                        return (
                            <a href={`/posts/${blog.id}`} key={blog.id}>
                                <div className="rounded-xl border bg-card text-card-foreground shadow">
                                    <div className="flex flex-col space-y-1.5 p-6">
                                        <div className="mb-4">
                                            <img
                                                src={blogImageUrl}
                                                alt={`Cover image for ${blog.title}`}
                                                className="rounded-lg object-cover w-full h-[200px]"
                                            />
                                        </div>
                                        <div className="tracking-tight text-2xl font-bold">
                                            {blog.title}
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                            <a className="hover:underline" href={`/author/${blog.user_id}`}>
                                                {t('mainpage.author')}: {blog.user_id}
                                            </a>
                                            <span>•</span>
                                            <span>{t('mainpage.date')}: {formattedDate}</span>
                                        </div>
                                    </div>
                                    <div className="p-6 pt-0">
                                        <p className="text-muted-foreground">{blog.description}</p>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </section>
                <Sidebar />
            </div>
        </main>
    );
};

export default MainPage;
