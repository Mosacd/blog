

const AuthorAbout = () =>{

    return(
     
        <div className=" max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 dark:bg-neutral-900 ">
        <h2 className="text-xl font-bold mb-4">About Jane Doe</h2>
        <p className="text-gray-700 mb-4 dark:text-white">
          Jane Doe is a seasoned software engineer with over a decade of
          experience in web development. She specializes in JavaScript, React,
          and Node.js, and has a keen interest in emerging technologies like AI
          and blockchain. Jane is a frequent speaker at tech conferences and
          contributes to various open-source projects.
        </p>
        <h3 className="text-lg font-semibold mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {["JavaScript", "React", "Node.js", "Python", "AI", "Blockchain", "Web Development"].map(
            (skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium dark:bg-neutral-950"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    )

}

export default AuthorAbout;