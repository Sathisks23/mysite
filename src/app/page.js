import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center">Sathish Kumar </h1>
      <p className="text-center text-lg mt-2">
        Full Stack Developer | MERN Stack | Python | SEO | AI Robotics | Freelancer
      </p>

      {/* Introduction */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-2">
          I am a **freelance full stack developer** with expertise in **MERN Stack (MongoDB, Express.js, React, Node.js)**, 
          **Python Development**, **SEO Optimization**, and **AI Robotics**. I build high-performance web applications 
          and automation solutions tailored to businesses and individuals.
        </p>
      </section>

      {/* Services */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">What I Do</h2>

        <h3 className="text-xl font-medium mt-4">Full Stack Development</h3>
        <p>
          I specialize in **MERN Stack** development, creating modern, scalable, and high-performance 
          web applications. From frontend UI/UX to backend APIs and databases, I ensure seamless integration.
        </p>

        <h3 className="text-xl font-medium mt-4">Python Development</h3>
        <p>
          I build **backend systems, automation scripts, data processing tools**, and **AI-based applications** 
          using **Python**. My expertise includes Django, FastAPI, and working with APIs.
        </p>

        <h3 className="text-xl font-medium mt-4">SEO Optimization</h3>
        <p>
          I help businesses improve **search engine rankings** by implementing **SEO best practices**, 
          including keyword research, metadata optimization, and technical SEO strategies for higher visibility.
        </p>

        <h3 className="text-xl font-medium mt-4">AI & Robotics</h3>
        <p>
          Passionate about AI and robotics, I work on **automation projects, IoT applications**, 
          and **AI-driven web services** that integrate machine learning models into web apps.
        </p>

        <h3 className="text-xl font-medium mt-4">Freelancing & Consulting</h3>
        <p>
          I offer **freelance development services**, helping startups and businesses build scalable 
          applications, improve their SEO, and integrate AI solutions into their workflows.
        </p>
      </section>

      {/* Call to Action */}
      <section className="mt-8 text-center">
        <h2 className="text-2xl font-semibold">Let’s Work Together</h2>
        <p className="mt-2">
          Need a high-performance web app, SEO optimization, or AI automation?  
          Let's discuss your project and bring your ideas to life.
        </p>
        <div className="mt-4">
          <a href="/blog" className="underline">📖 Read My Blog</a>
          <span className="mx-3">|</span>
          <a href="/hire-me" className="underline">💼 Hire Me</a>
        </div>
      </section>
    </main>
  );
}
