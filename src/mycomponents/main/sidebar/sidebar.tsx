import { useTranslation } from "react-i18next";


const Sidebar: React.FC = () => {
  const { t } = useTranslation();
    return (

        
        <div className="md:w-1/3 space-y-8">
        <div >
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="font-semibold leading-none tracking-tight">
              {t('mainpage.populartags')}
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-2">
                {["Blockchain", "Cryptocurrency", "Technology", "AI"].map(
                  (tag, index) => (
                    <a href="/search" key={index}>
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                        {tag}
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      <div className="rounded-xl border bg-card text-card-foreground shadow">
        {/* Popular Tags */}
        
  
        {/* Featured Authors */}
        <div >
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="font-semibold leading-none tracking-tight">{t('mainpage.featuredauthors')}</div>
        </div>
        <div className="p-6 pt-0">
          <ul className="space-y-4">
            {[
              {
                id: 4,
                name: "Alice Johnson",
                title: "Blockchain Enthusiast",
                avatar: "https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=40&width=40",
              },
              {
                id: 5,
                name: "Bob Smith",
                title: "Crypto Analyst",
                avatar: "https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=40&width=40",
              },
              {
                id: 6,
                name: "Carol Williams",
                title: "Tech Journalist",
                avatar: "https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=40&width=40",
              },
            ].map((author) => (
              <li key={author.id}>
                <a className="flex items-center space-x-4 " href={`/author/${author.id}`}>
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ">
                    <img
                      className="aspect-square h-full w-full"
                      alt={`Avatar of ${author.name}`}
                      src={author.avatar}
                    />
                  </span>
                  <div>
                    <a
                      className="font-semibold hover:underline"
                      href={`/author/${author.id}`}
                    >
                      {author.name}
                    </a>
                    <p className="text-sm text-muted-foreground">{author.title}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
      </div>
    
    );
  };
  
  export default Sidebar;