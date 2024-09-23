import React from "react";
import Blog1 from "../../assets/Blogs/1.jpg";
import Blog2 from "../../assets/Blogs/2.jpg";
import Blog3 from "../../assets/Blogs/3.jpg";
import Blog4 from "../../assets/Blogs/4.jpg";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
// ` blog data  about fanta
const BlogData = [
  {
    id: 1,
    img: Blog1,
    title: "Fanta: The Ultimate Smoothie",
    desc: "Discover the secret to a smoothie that's not just for fans of the classic Fanta. This article will guide you through the process of creating your own Fanta Smoothie.",
    link: "#",
  },
  {
    id: 2,
    img: Blog2,
    title: "The Evolution of Fanta: From a Candy to a Smoothie",
    desc: "From the iconic Fanta candy to the modern, sustainable Fanta Smoothie, let's explore the evolution of Fanta and how it continues to evolve.",
    link: "#",
  },
  {
    id: 3,
    img: Blog3,
    title: "The Unforgettable Fanta Smoothie Recipe: A Taste Test",
    desc: "Our guide to the most unforgettable Fanta Smoothie recipe, including the ingredients, preparation steps, and taste profile.",
    link: "#",
  },
  {
    id: 4,
    img: Blog4,
    title: "Fanta: The Ultimate Smoothie Review",
    desc: "Did you enjoy the Fanta Smoothie? Share your thoughts, experiences, and recommendations with the world!",
    link: "#",
  },
];

const Blogs = () => {
  return (
    <section className="bg-gray-50">
      <div className="container py-14">
        <h1 className="text-3xl font-bold text-center pb-8">Blogs</h1>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BlogData.map((item) => (
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "black",
                zIndex: 9999,
                followSpeed: 0.5,
                scale: 5,
                text: "read",
                textFontSize:"3px"
              }}
            >
              <div
                className="flex flex-col items-center justify-center gap-6 p-2 md:p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:translate-y-2 duration-300"
                key={item.id}
              >
                <img src={item.img} alt={item.title} />
                <div className="space-y-2">
                  <h1 className="text-xl font-bold line-clamp-2">
                    {item.title}
                  </h1>
                  <p className="line-clamp-2">{item.desc}</p>
                </div>
              </div>
            </UpdateFollower>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
