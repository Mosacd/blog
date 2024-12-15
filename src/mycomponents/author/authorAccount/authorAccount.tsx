
import { useTranslation } from "react-i18next";



const AuthorAccount = () =>{

    const posts = [{id: 1,
        title: "The Future of Blockchain Technology",
        image: "https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&width=400",
        author: "John Doe",
        date: "May 15, 2023",
        readTime: "5 min read",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        tags: ["Blockchain", "Technology", "Future"],}]
    const { t } = useTranslation();

return(
  <div className="flex gap-10 flex-col">

    {posts.map((post) => (
        <a href={`/posts/${post.id}`} key={post.id}>
            <div className="rounded-xl border bg-card text-card-foreground shadow dark:bg-neutral-900">
                <div className="flex flex-col space-y-1.5 p-6">
                    <div className="mb-4 ">
                        <img
                            src={post.image}
                            alt={`Cover image for ${post.title}`}
                            className="rounded-lg object-cover w-full h-[200px]"
                        />
                    </div>
                    <div className="tracking-tight text-2xl font-bold">
                        {post.title}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground justify-center">
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
                <div className="flex items-center p-6 pt-0 justify-center">
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

</div>
)

}




export default AuthorAccount;