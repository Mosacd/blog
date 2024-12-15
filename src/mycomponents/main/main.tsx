import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar/sidebar";
import { useTranslation } from "react-i18next";
import { getBlogsList } from "../../supabase/blogsList";
import { Blog } from "../../supabase/blogsList";

const MainPage: React.FC = () => {
    const { t } = useTranslation();
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getBlogsList().then((res) => {
            const blogsList = Array.isArray(res) ? res : [];
            setBlogs(blogsList);
            setIsLoading(false);
            console.log(blogsList);
        });
    }, []);

    if (isLoading) {
        return <p>{t('mainpage.loading')}</p>;
    }

    return (
        <main className="px-4 py-8 flex-grow">
            <div className="container mx-auto flex flex-col md:flex-row gap-8">
                <section className="md:w-2/3 space-y-8 flex flex-col">
                    {blogs.map((blog) => {
                       
                        const blogImageUrl = blog?.image_url
                            ? `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/blog_images/${blog?.image_url}`
                            : "https://pkdqnffhfhajyeiqgkci.supabase.co/storage/v1/object/public/blog_images/grubber_storm_king_4k_5k_hd_my_little_pony_the_movie.jpg";
                        console.log(blogImageUrl)
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
                                            <span>{t('mainpage.date')}: {new Date(blog.created_at).toLocaleDateString()}</span>
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
