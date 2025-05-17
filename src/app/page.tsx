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
        <h2 className="section-heading">
          <span className="section-number">04.</span> Contact
        </h2>
        <div className="mt-8">
          <h3 className="text-3xl text-lightest-slate font-semibold mb-6">
            Get In Touch
          </h3>
          <p className="text-lg mb-8 max-w-xl">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="border border-green text-green px-7 py-4 rounded font-mono hover:bg-green/10 transition-colors duration-300 inline-block"
          >
            Say Hello
          </a>
        </div>
      </section>
    </div>
  );
}
