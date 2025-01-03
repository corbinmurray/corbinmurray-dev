import RevealSection from "@/components/reveal-section";

export default async function Home() {
	return (
		<RevealSection className="flex flex-col justify-center overflow-hidden mt-6">
			<h1 className="text-[clamp(14px,5vw,16px)] md:text-[clamp(14px,5vw,18px)] font-mono">Hi, my name is</h1>

			<h2 className="text-[clamp(40px,8vw,80px)] font-semibold border-none bg-clip-text text-transparent bg-gradient-to-tr from-primary to-secondary brightness-110 leading-tight">
				Corbin Murray
			</h2>

			<h3 className="text-[clamp(30px,6vw,48px)] font-semibold leading-none">Software Engineer</h3>

			<article className="my-5 prose-lg md:prose-xl">
				<p>
					I lead projects focused on optimizing software processes and ensuring scalable solutions. My career spans developing complex integrations, building
					robust microservices, and mentoring teams to establish standards in fast-paced environments.
				</p>
			</article>
		</RevealSection>
	);
}
