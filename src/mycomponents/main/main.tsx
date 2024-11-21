import React from "react";
import Sidebar from "./sidebar/sidebar";
import { useTranslation } from "react-i18next";

interface Post {
    id: number;
    title: string;
    image: string;
    author: string;
    date: string;
    readTime: string;
    description: string;
    tags: string[];
}

const posts: Post[] = [
    {
        id: 1,
        title: "The Future of Blockchain Technology",
        image: "https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&width=400",
        author: "John Doe",
        date: "May 15, 2023",
        readTime: "5 min read",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Blockchain", "Technology", "Future"],
    },
    {
        id: 2,
        title: "Cryptocurrency: A Beginner's Guide",
        image: "https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&width=400",
        author: "Jane Smith",
        date: "May 18, 2023",
        readTime: "7 min read",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Cryptocurrency", "Technology", "Beginner"],
    },
];

const MainPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <main className="px-4 py-8 flex-grow">
            <div className="container mx-auto flex flex-col md:flex-row gap-8">
                <section className="md:w-2/3 space-y-8 flex flex-col">
                    {posts.map((post) => (
                        <a href={`/posts/${post.id}`} key={post.id}>
                            <div className="rounded-xl border bg-card text-card-foreground shadow">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div className="mb-4">
                                        <img
                                            src={post.image}
                                            alt={`Cover image for ${post.title}`}
                                            className="rounded-lg object-cover w-full h-[200px]"
                                        />
                                    </div>
                                    <div className="tracking-tight text-2xl font-bold">
                                        {post.title}
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                        <a className="hover:underline" href={`/author/${post.id}`}>
                                            {t('mainpage.author')}: {post.author}
                                        </a>
                                        <span>•</span>
                                        <span>{t('mainpage.date')}: {post.date}</span>
                                        <span>•</span>
                                        <span>{t('mainpage.readTime')}: {post.readTime}</span>
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <p className="text-muted-foreground">{post.description}</p>
                                </div>
                                <div className="flex items-center p-6 pt-0">
                                    <div className="flex space-x-2">
                                        {post.tags.map((tag, index) => (
                                            <a href="/search" key={index}>
                                                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                                    {tag}
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </section>
                <Sidebar />
            </div>
        </main>
    );
};

export default MainPage;
