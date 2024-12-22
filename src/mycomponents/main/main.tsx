import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar/sidebar";
import { useTranslation } from "react-i18next";
import { getFilteredBlogsList } from "../../supabase/blogsList";
import { Blog, BlogsFilterValueTypes } from "../../supabase/blogsList";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../components/ui/input";
import underscore from "underscore";
import { useSearchParams } from "react-router-dom";
import qs from "qs";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useQuery } from "@tanstack/react-query";

dayjs.extend(relativeTime);

const MainPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const parsedQueryParams = qs.parse(searchParams.toString());

  const { control, watch } = useForm<BlogsFilterValueTypes>({
    defaultValues: {
      searchText: parsedQueryParams?.searchedtext?.toString(),
    },
  });

  const watchedSearchText = watch("searchText") || "";


  const [debouncedSearchText, setDebouncedSearchText] = useState(watchedSearchText);

  // for the search text
  useEffect(() => {
    const handler = underscore.debounce(() => {
      setDebouncedSearchText(watchedSearchText);
    }, 1000);

    handler();

    // Cancel debounce on component unmount or watchedSearchText change
    return () => handler.cancel();
  }, [watchedSearchText]);

  
  const { data: blogs = [], isLoading } = useQuery<Blog[]>(
    ["blogs", debouncedSearchText],
    () => getFilteredBlogsList({ searchText: debouncedSearchText }),
 {
    refetchOnWindowFocus: false,
 }
  );

  // Update query parameters
  useEffect(() => {
    const queryString = qs.stringify(
      { searchedtext: debouncedSearchText },
      {
        skipNulls: true,
        filter: (_, value) => value || undefined,
      }
    );
    setSearchParams(queryString);
  }, [debouncedSearchText]);

  if (isLoading) {
    return <p>{t("mainpage.loading")}</p>;
  }

 const formatDate = (created_at:string) => {
    const creationDate = dayjs(created_at);
    const formattedDate = creationDate.isAfter(dayjs().subtract(1, "day"))
              ? creationDate.fromNow()
              : creationDate.format("HH:mm - DD/MM/YYYY");
              return formattedDate;
 }

  console.log("rerender");
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
                  placeholder="Enter search text..."
                  required
                />
              )}
            />
          </div>
          {blogs.map((blog) => {
            const blogImageUrl = blog?.image_url
              ? `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/blog_images/${blog?.image_url}`
              : "https://pkdqnffhfhajyeiqgkci.supabase.co/storage/v1/object/public/blog_images/grubber_storm_king_4k_5k_hd_my_little_pony_the_movie.jpg";

            const  formattedDate  = formatDate(blog.created_at);

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
                        {t("mainpage.author")}: {blog.user_id}
                      </a>
                      <span>•</span>
                      <span>{t("mainpage.date")}: {formattedDate}</span>
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
