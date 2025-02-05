import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                Hi, I'm [Your Name], a passionate Marketing Strategist with over
                [X] years of experience in developing and executing data-driven
                marketing strategies.
              </p>
              <p className="text-lg text-gray-600">
                I specialize in consumer insights and market analysis, helping
                businesses understand their target audience and create impactful
                marketing campaigns.
              </p>
              <p className="text-lg text-gray-600">
                My approach combines analytical thinking with creative
                problem-solving to deliver measurable results and drive business
                growth.
              </p>
            </div>

            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
