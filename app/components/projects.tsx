"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import iProjects from "../interfaces/iProjects"

const projects: iProjects[] = [
  {
    title: "SmartMart Solutions",
    description:
      "SmartMart Solutions Project: This project is a full-stack application for sales and product management.",
    image: "https://pub-08f4197c0606490b93ebe64b7203e96f.r2.dev/smartmart.png",
    tags: ["React", "Next.js", "Python", "SQLite", "FastAPI"],
    URL: "https://smartmart-solutions-murex.vercel.app/"
  },
  {
    title: "System Academy",
    description: "The Academic System aims to manage data on people (students and teachers), courses, and enrollments in a simple and efficient way, allowing CRUD operations and integrated queries between entities.",
    image: "https://pub-08f4197c0606490b93ebe64b7203e96f.r2.dev/sistemaacademico.png",
    tags: ["React,js","Next.js", "Node.js","Express", "TypeScript", "Prisma", "PostgreSQL","Tailwind CSS"],
    URL: ""
  },
  {
    title: "Task Management App",
    description:
      "Displays a photo gallery using a public image API (Unsplash). The application allows you to view initial photos, search for images by keyword in real time, and display appropriate messages when there are no results.",
    image: "https://pub-08f4197c0606490b93ebe64b7203e96f.r2.dev/appgaleriafotos.png",
    tags: ["React", "TypeScript"],
    URL: "https://aplicacao-de-galeria-de-fotos.vercel.app/"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-tertiary">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 md:h-64">
                <Link href={project.URL}>
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </Link>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-tertiary text-quaternary px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
