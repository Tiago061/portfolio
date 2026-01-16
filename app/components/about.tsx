import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-primarySolid text-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="https://pub-08f4197c0606490b93ebe64b7203e96f.r2.dev/th1.jpeg"
              alt="Tiago Henrique"
              width={400}
              height={400}
              className="rounded-lg mx-auto object-cover"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="mb-4">
              Hello! I&#39m Tiago Henrique, a Full Stack Developer, with experience in building modern, scalable, and performance-driven web applications. I work across both frontend and backend, using technologies such as React, Next.js, Node.js, and TypeScript, as well as relational and non-relational databases.
            </p>
            <p className="mb-4">
              I also have experience with Java and Spring Boot for developing robust and secure APIs, along with knowledge of Python for backend support solutions. I have a proactive mindset, a strong problem-solving approach, and a continuous drive to improve my technical skills by applying best practices and clean architecture principles.
            </p>
            <p>
              Currently, I develop personal projects and SaaS solutions, focusing on delivering efficient, secure, and user-centered digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
