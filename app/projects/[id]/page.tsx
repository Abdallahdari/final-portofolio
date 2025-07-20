// import Footer from "@/app/_components/Footer";
// import Navbar from "@/app/_components/Navbar";
// import { SingleProject } from "@/app/_lib/data";
// import { GlowingCard } from "@/app/components/ui/GlowingCarrd";
// import { SectionReveal } from "@/app/components/ui/secition-reveal";
// import { Button } from "@/components/ui/button";
// import {
//   ArrowLeft,
//   Badge,
//   Code,
//   ExternalLink,
//   Github,
//   Users,
//   Zap,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// export default async function page({ params }: { params: { id: string } }) {
//   const project = await SingleProject(params.id);
//   console.log(project);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
//       {/* Navigation */}
//       <nav className="relative z-20 flex items-center justify-between p-6 border-b border-gray-800/50 backdrop-blur-sm bg-gray-900/80">
//         <div className="flex items-center space-x-8">
//           <div className="flex items-center space-x-2 group">
//             <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-400/50">
//               <span className="text-gray-900 font-bold text-sm">A</span>
//             </div>
//             <span className="font-medium transition-colors duration-300 group-hover:text-cyan-400">
//               Abdullah abdirisaaq
//             </span>
//           </div>
//         </div>
//         <Button
//           variant="outline"
//           className="border-gray-600 text-white hover:bg-cyan-400/10 hover:border-cyan-400 hover:text-cyan-400 bg-transparent transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
//         >
//           Download cv
//         </Button>
//       </nav>

//       {/* Back Button */}
//       <div className="relative z-10 px-6 py-4 max-w-6xl mx-auto">
//         <Link href="/projects">
//           <Button
//             variant="ghost"
//             className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back to Projects
//           </Button>
//         </Link>
//       </div>

//       {/* Project Header */}
//       <SectionReveal>
//         <section className="relative z-10 px-6 py-8 max-w-6xl mx-auto">
//           <GlowingCard className="border-gray-700/50 bg-gray-800/80 backdrop-blur-sm p-8">
//             <div className="flex flex-wrap items-center gap-4 mb-6">
//               {/* <Badge
//                 variant="outline"
//                 className={
//                   project.status === "Live"
//                     ? "border-green-500/50 text-green-500 shadow-lg shadow-green-500/20"
//                     : "border-blue-500/50 text-blue-500 shadow-lg shadow-blue-500/20"
//                 }
//               >
//                 {project.status}
//               </Badge> */}

//               {/* <Badge
//                 variant="secondary"
//                 className="bg-gray-800/50 text-gray-300"
//               >
//                 <Users className="w-3 h-3 mr-1" />
//                 {project.team}
//               </Badge> */}
//             </div>

//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               {project.Topic}
//             </h1>
//             <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
//               {project.Catogery}
//             </h2>

//             <p className="text-gray-300 text-lg mb-8 max-w-4xl">
//               {project.Desctrition}
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 hover:from-cyan-500 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 transform hover:scale-105">
//                 <ExternalLink className="w-4 h-4 mr-2" />
//                 View Live Demo
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-gray-600/50 text-white hover:bg-cyan-400/10 hover:border-cyan-400 hover:text-cyan-400 bg-transparent transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
//               >
//                 <Github className="w-4 h-4 mr-2" />
//                 View Source Code
//               </Button>
//             </div>
//           </GlowingCard>
//         </section>
//       </SectionReveal>

//       {/* Project Images */}
//       <SectionReveal delay={200}>
//         <section className="relative z-10 px-6 py-8 max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <GlowingCard className="bg-gray-800/80 border-gray-700/50 backdrop-blur-sm">
//               <div className="p-0">
//                 <Image
//                   src={project.image}
//                   alt={`${project.title} }`}
//                   width={600}
//                   height={400}
//                   className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
//                 />
//               </div>
//             </GlowingCard>
//           </div>
//         </section>
//       </SectionReveal>

//       {/* Project Details */}
//       <SectionReveal delay={400}>
//         <section className="relative z-10 px-6 py-8 max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Main Content */}
//             <div className="lg:col-span-2 space-y-8">
//               {/* About */}
//               <GlowingCard className="bg-gray-800/80 border-gray-700/50 backdrop-blur-sm">
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold mb-4 flex items-center">
//                     <Code className="w-6 h-6 mr-2 text-cyan-400" />
//                     About This Project
//                   </h3>
//                   <div className="text-gray-300 space-y-4">
//                     {/* description */}
//                   </div>
//                 </div>
//               </GlowingCard>

//               {/* Key Features */}
//               <GlowingCard className="bg-gray-800/80 border-gray-700/50 backdrop-blur-sm">
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold mb-4 flex items-center">
//                     <Zap className="w-6 h-6 mr-2 text-cyan-400" />
//                     Key Features
//                   </h3>
//                 </div>
//               </GlowingCard>

//               {/* Challenges */}
//             </div>

//             {/* Sidebar */}
//             <div className="space-y-6">
//               {/* Project Info */}
//               <GlowingCard className="bg-gray-800/80 border-gray-700/50 backdrop-blur-sm">
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-4">Project Info</h3>
//                   <div className="space-y-3">
//                     <div>
//                       <span className="text-gray-400">Role:</span>
//                       <p className="text-white">{project.role}</p>
//                     </div>
//                     <div>
//                       <span className="text-gray-400">Duration:</span>
//                       <p className="text-white">{project.duration}</p>
//                     </div>

//                     <div>
//                       <span className="text-gray-400">Year:</span>
//                       <p className="text-white">{project.year}</p>
//                     </div>
//                   </div>
//                 </div>
//               </GlowingCard>

//               {/* Technologies */}
//               <GlowingCard className="bg-gray-800/80 border-gray-700/50 backdrop-blur-sm">
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
//                   {/* <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, index) => (
//                       <Badge
//                         key={index}
//                         variant="outline"
//                         className="border-cyan-400/50 text-cyan-400 text-xs hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 transform hover:scale-105"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div> */}
//                 </div>
//               </GlowingCard>

//               {/* Links */}
//               <GlowingCard className="bg-gray-800/80 border-gray-700/50 backdrop-blur-sm">
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-4">Links</h3>
//                   <div className="space-y-3">
//                     <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 hover:from-cyan-500 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 transform hover:scale-105">
//                       <ExternalLink className="w-4 h-4 mr-2" />
//                       Live Demo
//                     </Button>
//                     <Button
//                       variant="outline"
//                       className="w-full border-gray-600/50 text-white hover:bg-cyan-400/10 hover:border-cyan-400 hover:text-cyan-400 bg-transparent transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
//                     >
//                       <Github className="w-4 h-4 mr-2" />
//                       Source Code
//                     </Button>
//                   </div>
//                 </div>
//               </GlowingCard>
//             </div>
//           </div>
//         </section>
//       </SectionReveal>
//     </div>
//   );
// }
