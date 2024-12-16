import { Button } from "@/components/ui/button";

export default async function Home() {
	return (
		<main>
			<section id="hero" className="h-[calc(100vh-5rem)] p-0 flex flex-col justify-center items-start mx-auto">
				<h1 className="text-[clamp(14px,5vw,16px)] md:text-[clamp(14px,5vw,18px)] opacity-80 font-mono">Hi, my name is</h1>
				<h2 className="text-[clamp(40px,8vw,80px)] font-semibold text-primary font-sans">Corbin Murray.</h2>
				<h3 className="text-[clamp(30px,6vw,70px)] opacity-60 font-semibold leading-none font-sans">I build software.</h3>
				<article className="prose dark:prose-invert md:prose-lg my-5">
					<p className="opacity-80 font-sans">
						I lead projects focused on optimizing software processes and ensuring scalable solutions. My career spans developing complex integrations, building
						robust microservices, and mentoring teams to establish standards in fast-paced environments.
					</p>
				</article>

				<Button asChild variant="outline" size="wide">
					<a href="/Corbin Murray - Resume.pdf" target="_blank" className="btn btn-wide btn-outline btn-primary capitalize mt-5">
						resume
					</a>
				</Button>
			</section>
		</main>
	);
}
