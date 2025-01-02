import RevealSection from "@/components/reveal-section";
import SectionHeader from "@/components/section-header";
import SocialLinks from "@/components/social-links";

export default async function Page() {
	return (
		<RevealSection>
			<SectionHeader sequence={4} title="Contact Me" />

			<article>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ab nulla nam corrupti fugiat inventore atque temporibus vero, ut unde ratione sequi
					sit architecto dicta dolorem, praesentium recusandae cumque? Ex!
				</p>
			</article>

			<SocialLinks orientation="horizontal" className="mt-16 md:gap-12" />
		</RevealSection>
	);
}
