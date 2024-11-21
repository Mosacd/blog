
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
const About = () =>{
return(
<div className="px-6 py-12 bg-gray-50 text-gray-900 flex-grow dark:bg-neutral-900 dark:text-white rounded-xl">
  <div className="max-w-3xl mx-auto space-y-12">
   
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-4">BitBlogs</h1>
      <p className="text-lg text-gray-600 dark:text-white">
        Where tech enthusiasts share, learn, and inspire.
      </p>
    </section>

 
    <section className="space-y-4 text-center">
      <h2 className="text-2xl font-semibold">About Us</h2>
      <p className="dark:text-white">
        At bitBlogs, we bring together developers, innovators, and tech lovers
        to foster a space for collaboration and growth.
      </p>
    </section>

  
    <section className="rounded-lg bg-white shadow p-6 dark:bg-neutral-950 text-center">
      <h2 className="text-xl font-semibold mb-2">What We Offer</h2>
      <p className="text-gray-700 dark:text-white">
        Access quality content, connect with a vibrant community, and stay
        ahead with insights on emerging technologies.
      </p>
    </section>

   
    <section className="text-center">
      <p className="text-gray-600 mb-10 dark:text-white ">
        Join bitBlogs and shape the future of technology with us.
      </p>
    
      <Link to="/SignUpForm" >
      <Button className="bg-blue-600 text-white hover:bg-blue-700 transition">Get Started</Button>
      </Link>
    </section>
  </div>
</div>



)
}

export default About;