import RevealSection from "@/components/reveal-section";
import SectionHeader from "@/components/section-header";
import SocialLinks from "@/components/social-links";

export default async function Page() {
	return (
		<RevealSection>
			<SectionHeader title="Contact Me" />

			<article>
				<p>
					I&apos;d love to hear from you! Whether you want to collaborate on a project, discuss software development, or just say hello, feel free to reach out using
					one of the options below.
				</p>
			</article>

			<SocialLinks orientation="horizontal" className="mt-16 md:gap-12" />
		</RevealSection>
	);
}
