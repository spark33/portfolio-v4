// app/page.tsx
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="max-w-3xl">
      <section id="about" className="mb-32">
        <About />
      </section>

      <section id="experience" className="mb-32">
        <Experience />
      </section>

      <section id="projects" className="mb-32">
        <Projects />
      </section>

      <section id="contact" className="mb-32">
        <h2 className="flex items-center text-2xl font-semibold text-text-primary mb-8">
          <span
            className="font-mono mr-2 text-xl"
            style={{ color: "var(--color-primary)" }}
          >
            04.
          </span>
          Contact
          <span className="ml-4 h-px bg-background-lighter flex-grow"></span>
        </h2>
        <div className="mt-8">
          <h3 className="text-3xl text-text-primary font-semibold mb-6">
            Get In Touch
          </h3>
          <p className="text-lg mb-8 max-w-xl">
            I'm always interested in new opportunities to collaborate on
            innovative projects. Whether you're looking for a frontend developer
            for a project, have a question about my work, or just want to
            connect, feel free to reach out!
          </p>
          <a
            href="mailto:spark@mindlogic.ai"
            className="border px-7 py-4 rounded font-mono hover:bg-primary-10 transition-colors duration-300 inline-block"
            style={{
              color: "var(--color-primary)",
              borderColor: "var(--color-primary)",
            }}
          >
            Say Hello
          </a>
        </div>
      </section>
    </div>
  );
}
