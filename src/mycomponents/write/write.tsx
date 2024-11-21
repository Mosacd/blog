import {Textarea} from "../../components/ui/textarea"
// import {Input} from "../../components/ui/input"

const WritePost = () => {
  return (
    <div className="px-4 py-8 flex-grow w-max">
      <div className="container mx-auto">
        <div className=" rounded-xl border bg-card text-card-foreground shadow max-w-3xl mx-auto">
          <div className="flex flex-col space-y-1.5 p-6">
            <h1 className="tracking-tight text-2xl font-bold">Write a New Post</h1>
          </div>
          <div className="p-6 pt-0">
            <form className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="title"
                  placeholder="Enter your post title"
                  required
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
                <Textarea/>
              </div>

              {/* Cover Image */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="cover-image"
                >
                  Cover Image
                </label>
                <input
                  type="file"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="cover-image"
                  accept="image/*"
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
                  <input
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