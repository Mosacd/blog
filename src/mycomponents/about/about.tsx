

const About = () =>{
return(
<div className="px-4 py-8 flex-grow">
  <div className="max-w-4xl mx-auto space-y-12">
    {/* About Section */}
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-4">About bitBlogs</h1>
      <p className="text-xl text-muted-foreground">
        Empowering tech enthusiasts to share knowledge and inspire innovation.
      </p>
    </section>

    {/* Mission Section */}
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">Our Mission</h2>
        <p className="text-muted-foreground">
          At bitBlogs, we believe in the power of shared knowledge. Our mission
          is to create a platform where tech enthusiasts, developers, and
          innovators can come together to share ideas, learn from each other,
          and push the boundaries of what's possible in the world of
          technology.
        </p>
      </div>
      <div className="relative h-64 md:h-full">
        <img
          src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=400&amp;width=400"
          alt="Team collaboration"
          className="rounded-lg object-cover"
        />
      </div>
    </section>

    {/* Offer Section */}
    <section className="space-y-8">
      <h2 className="text-3xl font-semibold text-center">What We Offer</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Offer Card 1 */}
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lucide lucide-book-open w-10 h-10 text-primary mb-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 7v14"></path>
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
            </svg>
            <div className="font-semibold leading-none tracking-tight">
              Rich Content
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="text-sm text-muted-foreground">
              Access a wide range of articles, tutorials, and insights on the
              latest tech trends and best practices.
            </div>
          </div>
        </div>
        {/* Offer Card 2 */}
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lucide lucide-users w-10 h-10 text-primary mb-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <div className="font-semibold leading-none tracking-tight">
              Vibrant Community
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="text-sm text-muted-foreground">
              Connect with like-minded individuals, share your knowledge, and
              grow your professional network.
            </div>
          </div>
        </div>
        {/* Offer Card 3 */}
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lucide lucide-zap w-10 h-10 text-primary mb-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            <div className="font-semibold leading-none tracking-tight">
              Cutting-edge Topics
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="text-sm text-muted-foreground">
              Stay ahead of the curve with content covering emerging
              technologies and innovative solutions.
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Story Section */}
    <section className="bg-muted p-8 rounded-lg">
      <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
      <p className="text-muted-foreground mb-4">
        Founded in 2023, bitBlogs started as a small project by a group of
        passionate developers who wanted to create a space for sharing their
        experiences and learning from others. What began as a simple blog
        quickly grew into a thriving community of tech enthusiasts from all
        around the world.
      </p>
      <p className="text-muted-foreground">
        Today, bitBlogs is proud to be a leading platform for technology-focused
        content, fostering innovation and collaboration in the ever-evolving
        world of tech.
      </p>
    </section>

    {/* Join Us Section */}
    <section className="text-center">
      <h2 className="text-3xl font-semibold mb-4">Join Us on Our Journey</h2>
      <p className="text-muted-foreground mb-6">
        Whether you're a seasoned developer, a curious beginner, or somewhere in
        between, there's a place for you at bitBlogs. Let's shape the future of
        technology together.
      </p>
      <a
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8"
        href="/register"
      >
        Get Started Today
      </a>
    </section>
  </div>
</div>
)
}

export default About;