import { Button } from "@/components/ui/button";

export default async function Home() {
	return (
		<main>
			<section id="hero" className="min-h-screen flex flex-col justify-center items-start">
				<div className="-mt-20">
					<h1 className="text-[clamp(14px,5vw,16px)] md:text-[clamp(14px,5vw,18px)] opacity-80 font-mono">Hi, my name is</h1>
					<h2 className="text-[clamp(40px,8vw,80px)] font-semibold text-primary font-sans border-none">Corbin Murray.</h2>
					<h3 className="text-[clamp(30px,6vw,70px)] opacity-60 font-semibold leading-none font-sans">I build software.</h3>
					<article className="prose my-5">
						<p className="opacity-80">
							I lead projects focused on optimizing software processes and ensuring scalable solutions. My career spans developing complex integrations,
							building robust microservices, and mentoring teams to establish standards in fast-paced environments.
						</p>
					</article>

					<Button asChild variant="outline" size="blockToWide">
						<a href="/Corbin Murray - Resume.pdf" target="_blank" className="capitalize mt-5">
							resume
						</a>
					</Button>
				</div>
			</section>

			<section id="about" className="scroll-mt-28">
				<SectionHeader>About Me</SectionHeader>

				{/* Introduction */}
				<article className="prose">
					<p>Hello! My name is Corbin, and I enjoy solving tough technical problems and creating impactful software.</p>
					<p>
						I have a deep passion for bringing ideas to life through software development. Tackling challenges that require creativity and critical thinking
						excites me, and I find immense satisfaction in uncovering solutions that drive meaningful outcomes. The ever-evolving nature of technology keeps me
						motivated to continuously learn, improve, and push boundaries. Whether it's debugging intricate issues, architecting scalable systems, or exploring
						new technologies, I thrive on the growth and innovation each opportunity brings.
					</p>
				</article>

				{/* Technologies */}
				<article className="prose mt-8">
					<p>Here are a few technologies I have worked with recently:</p>
					<ul className="list-none p-0 md:p-0 grid grid-cols-2 gap-2 md:grid-cols-3">
						{RECENT_TECHNOLOGIES.map((tech, i) => (
							<li
								key={i}
								className="relative md:relative before:content-['>'] before:absolute before:left-0 before:text-accent ps-5 m-0 md:before:content-['>'] md:before:absolute md:before:left-0 md:before:text-accent md:ps-5 md:m-0">
								{tech}
							</li>
						))}
					</ul>
				</article>
			</section>
		</main>
	);
}

const SectionHeader = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="capitalize flex justify-center items-center mb-8">
			<h1>{children}</h1>
		</div>
	);
};

const RECENT_TECHNOLOGIES = ["C#", "TypeScript", ".NET Core", "Docker", "MongoDB", "PostgreSQL", "Apache Kafka", "AWS", "Redis"];
