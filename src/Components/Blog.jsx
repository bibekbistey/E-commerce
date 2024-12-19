import React from 'react'
import blogPosts from "../Data/Blog"
import {motion} from "framer-motion";

const Blog = () => {
  
  return (
    <div className="bg-gray-100 min-h-screen">
    
    <motion.div
    initial={{ opacity:0,y:-10 }}
    animate={{ opacity:1,y:0 }}
    transition={{ duration: 1 }}
     className="text-blak py-6 text-center border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Our Blog</h1>
        <p className="text-lg">Latest products, discounts and rewards for festive season</p>
      </div>
    </motion.div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Latest Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post,index) => (
          <motion.div
          initial={{ opacity:0, }}
            animate={{ opacity:1 }}
            transition={{ duration: 1,delay:0.6*index }}
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="text-gray-700 mt-2">{post.description}</p>
              <a
                href="#"
                className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Read More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

  </div>
);
  
}

export default Blog