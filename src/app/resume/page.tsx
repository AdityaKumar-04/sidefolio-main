// 'use client';
// import Image from 'next/image';
// import Profile from 'public/images/Profile/profilephoto.jpg'

// export default function Resume() {
//   return (
//     <main className="min-h-screen bg-[#0f111a] text-[#c5c6c7] p-8 font-mono">
//       <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
//         {/* Profile Section */}
//         <div className="bg-[#1c1e29] p-4 rounded-xl">
//           <div className="flex items-center space-x-4">

//             <div>
//               <h1 className="text-lg font-bold text-white">Aditya Kumar</h1>
//               <p className="text-sm">New Delhi 110012</p>
//               <p className="text-sm">+91 9582554479</p>
//               <p className="text-sm">kumaraditya5297@gmail.com</p>
//               <p className="text-sm text-blue-400"><a href="https://www.linkedin.com/in/aditya-kumar-88bb97260" target="_blank" rel="noopener noreferrer">Linkedin-Aditya kumar</a></p>
//             </div>
//           </div>
//         </div>

//         {/* Summary */}
//         <div className="bg-[#1c1e29] p-4 rounded-xl">
//           <h2 className="text-blue-400">#Summary</h2>
//           <p className="mt-2 text-sm">
//             A creative and detail-oriented web designer with a passion for crafting visually appealing and user-friendly
//             websites. Skilled in HTML, CSS, and responsive design, ensuring optimal functionality across devices.
//             Experienced in designing layouts that enhance user experience (UX) and elevate brand presence. Proficient
//             in using modern design tools like Figma and Adobe XD, delivering high-quality web designs that align with
//             client objectives. Always focused on balancing aesthetics with performance.
//           </p>
//         </div>

//         {/* Technical Skills */}
//         <div className="bg-[#1c1e29] p-4 rounded-xl col-span-2">
//           <h2 className="text-blue-400">#TechnicalSkills</h2>
//           <pre className="mt-2 text-sm whitespace-pre-wrap">
//             {`[
//   "JavaScript", "React", "Vue", "Next.js", "Django","Python",
//   "Webflow", "GSAP", "Figma","WordPress",
//   "Git", "Django Rest Framework",
//   "HTML5", "CSS3", "Tailwind CSS", "Bootstrap",
// ]`}
//           </pre>
//         </div>

//         {/* Education */}
//         <div className="bg-[#1c1e29] p-4 rounded-xl">
//           <h2 className="text-blue-400">#Education</h2>
//           <p className="text-sm mt-2">// 2023<br />Bachelor of Computer Application<br />Pursuing<br />Indra Gandhi National Open University</p>
//           <p className="text-sm mt-2">// 2023<br />Web Development with python Certification Course<br />Coding Bytes</p>
//           <p className="text-sm mt-2">// 2022<br />12th CBSE board examination <br />patrachar vidyalaya, New Delhi</p>
//         </div>

//         {/* Experience */}
//         <div className="bg-[#1c1e29] p-4 rounded-xl">
//           <h2 className="text-blue-400">#Experience</h2>
//           <pre className="text-sm mt-2 whitespace-pre-wrap">{`{
//   Contributed to the development of the Landing Page
//   for a fintech web application.
//   Frontend Intern - Tiako Motors, Jaipur (May–Aug XXXX)

//   Developed the official Arjun Co. Webstore.
//   Integrated payment and e-commerce.
//   Frontend Intern - Arjun Co., Bengaluru (May–Aug XXXX)

//   Spearheaded the development of a scalable cloud-based platform.
//   Collaborated with cross-functional teams.
// }`}</pre>
//         </div>

//         {/* Strengths */}
//         <div className="bg-[#1c1e29] p-4 rounded-xl">
//           <h2 className="text-blue-400">#Strength</h2>
//           <ul className="text-sm mt-2 list-disc ml-4 space-y-1">
//             <li>Proficient in HTML, CSS, JavaScript.</li>
//             <li>Strong web development understanding.</li>
//             <li>Strong problem-solving skills.</li>
//             <li>Ability to troubleshoot issues effectively.</li>
//           </ul>
//         </div>

//         {/* Certifications */}
//         <div className="bg-[#1c1e29] p-4 rounded-xl">
//           <h2 className="text-blue-400">#Certification</h2>
//           <pre className="text-sm mt-2 whitespace-pre-wrap">{`[
//   "React Certified",
//   "HTML5 Certified",
//   "CSS3 Certified",
//   "AWS Certified Solutions Architect"
// ]`}</pre>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="text-center text-xs text-[#888] mt-10">{"// Fueled by Coffee ☕"}</div>
//     </main>
//   );
// }

'use client';
import Image from 'next/image';
import { FaMugHot, FaCode, FaUser } from 'react-icons/fa';
import { MdSchool, MdWork, MdVerified } from 'react-icons/md';
import Profile from 'public/images/Profile/profilephoto.jpg';

export default function Resume() {
  return (
    <main className="min-h-screen bg-[#0f111a] text-[#c5c6c7] p-6 font-mono">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">

        {/* Profile */}
        <div className="bg-[#1c1e29] p-4 rounded-xl flex items-center space-x-4 shadow-md">

          <div>
            <h1 className="text-lg font-bold text-white">Aditya Kumar</h1>
            <p className="text-sm">New Delhi, 110012</p>
            <p className="text-sm">+91 9582554479</p>
            <p className="text-sm">kumaraditya5297@gmail.com</p>
            <p className="text-sm text-blue-400 underline">
              <a
                href="https://www.linkedin.com/in/aditya-kumar-88bb97260"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/aditya-kumar
              </a>
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-[#1c1e29] p-4 rounded-xl shadow-md">
          <h2 className="text-blue-400">#Summary</h2>
          <p className="mt-2 text-sm text-green-400">
            {'{'} A creative and detail-oriented web designer with a passion for crafting visually appealing and user-friendly
            websites. Skilled in HTML, CSS, and responsive design, ensuring optimal functionality across devices.
            Experienced in designing layouts that enhance user experience (UX) and elevate brand presence. Proficient
            in using modern design tools like Figma and Adobe XD, delivering high-quality web designs that align with
            client objectives. Always focused on balancing aesthetics with performance. {'}'}
          </p>
        </div>
        <div className="flex gap-4 md:col-span-2">
          {/* Sidebar Icons */}
          <div className="bg-[#1c1e29] p-4 rounded-xl shadow-md flex flex-col space-y-4 items-center text-blue-400 text-xl">
            <FaUser />
            <FaCode />
            <MdSchool />
            <MdWork />
            <MdVerified />
          </div>

          {/* Technical Skills */}
          <div className="bg-[#1c1e29] p-4 rounded-xl shadow-md w-full">
            <h2 className="text-blue-400">#TechnicalSkills</h2>
            <pre className="mt-2 text-sm text-green-400 whitespace-pre-wrap">
              {`[
  "JavaScript", "React", "Vue", "Next.js", "Django", "Python",
  "Webflow", "GSAP", "Figma", "WordPress",
  "Git", "Django Rest Framework",
  "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"
]`}
            </pre>
          </div>

          {/* Colored Skill Tags */}
          <div className="bg-[#1c1e29] p-4 rounded-xl shadow-md flex flex-col gap-2 text-sm">
            <div className="flex justify-between items-center text-white">
              <span>React</span> <span className="h-1 w-32 bg-pink-500 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center text-white">
              <span>Next.js</span> <span className="h-1 w-32 bg-purple-500 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center text-white">
              <span>GSAP</span> <span className="h-1 w-32 bg-lime-500 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center text-white">
              <span>Webflow</span> <span className="h-1 w-32 bg-blue-500 rounded-full"></span>
            </div>
          </div>
        </div>
        {/* Education */}
        <div className="bg-[#1c1e29] p-4 rounded-xl shadow-md">
          <h2 className="text-blue-400">#Education</h2>
          <p className="text-sm mt-2">// 2023<br />BCA - IGNOU (Pursuing)</p>
          <p className="text-sm mt-2">// 2023<br />Web Development with Python - Coding Bytes</p>
          <p className="text-sm mt-2">// 2022<br />12th CBSE - Patrachar Vidyalaya, Delhi</p>
        </div>

        {/* Experience */}
        <div className="bg-[#1c1e29] p-4 rounded-xl shadow-md">
          <h2 className="text-blue-400">#Experience</h2>
          <p className="text-sm mt-2">// 2024<br />Frontend Developer - Simply2Cloud</p>
          <pre className="text-sm mt-2 text-green-400 whitespace-pre-wrap">{`{
  - Collaborated with the design team to implement responsive UI using React and Tailwind CSS.
  - Converted Figma designs into pixel-perfect, accessible web pages.
  - Integrated frontend with REST APIs using Axios and Fetch.
  - Optimized page load speed and ensured cross-browser compatibility.
  - Worked on key components like Navbar, Dashboard, and Authentication flow.
}`}</pre>
        </div>

        {/* Strength */}
        <div className="bg-[#1c1e29] p-4 rounded-xl shadow-md">
          <h2 className="text-blue-400">#Strength</h2>
          <ul className="text-sm mt-2 text-green-400 list-disc ml-4 space-y-1">
            <li>Proficient in HTML, CSS, JavaScript</li>
            <li>Solid understanding of web principles</li>
            <li>Quick problem-solving ability</li>
            <li>Strong debugging skills</li>
          </ul>
        </div>

        {/* Certification */}
        <div className="bg-[#1c1e29] p-4 rounded-xl shadow-md">
          <h2 className="text-blue-400">#Certification</h2>
          <pre className="text-sm mt-2 text-green-400 whitespace-pre-wrap">{`[
  "React Certified",
  "HTML5 Certified",
  "CSS3 Certified",
  "Python Certified "
]`}</pre>
        </div>

        {/* Coffee Block */}
        <div className="bg-[#1c1e29] p-4 rounded-xl shadow-md text-center flex flex-col items-center text-green-400 ">
          <p>"Fueled by Coffee"</p>
          <FaMugHot className="text-2xl mt-2" />
          <p className="text-xs mt-2">{"// Powered by Aditya Kumar"}</p>
        </div>
      </div>
    </main>
  );
}
