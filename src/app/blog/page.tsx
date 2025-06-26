'use client'
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { motion } from "framer-motion";
import { Lines } from "@/components/Lines";
import { Circles } from "@/components/Circles";
import { BlogLayout } from "@/components/BlogLayout";
import { Prose } from "@/components/Prose";
import { Badge } from "@/components/Badge";

type Skill = {
  name: string;
  icon: JSX.Element;
};

const skills: Skill[] = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Django", icon: <SiDjango className="text-green-400" /> },
];

export default function Blog(): JSX.Element {
  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">Skills</Heading>
      {/* <Lines/> */}
      
      {/* <Circles/> */}

      <Paragraph className="pb-10">
        Proficient in modern web development technologies, crafting responsive designs, and building dynamic user interfaces with React and Next.js
      </Paragraph>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition duration-300"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="text-4xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill.icon}
            </motion.div>
            <motion.h3
              className="text-xl font-semibold text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {skill.name}
            </motion.h3>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}


