import { Button } from "@/components/ui/button";
import EmailSvg from "@/components/ui/email-svg";
import GitHubSvg from "@/components/ui/github-svg";
import LinkedInSvg from "@/components/ui/linkedin-svg";
import Navbar from "@/components/ui/navbar";
import { sectionChildVariants, sectionContainerVariants } from "@/lib/animation-variants";
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import * as motion from "motion/react-client";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { JetBrains_Mono, Raleway } from "next/font/google";
import "./globals.css";

const fontMono = JetBrains_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const fontSans = Raleway({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// Inline script to prevent hydration mismatch
	const setThemeScript = `
	  (function() {
		const theme = localStorage.getItem('theme');
		if (theme) {
		  document.documentElement.className = theme;
		  document.documentElement.style.colorScheme = theme;
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		  document.documentElement.className = 'dark';
		  document.documentElement.style.colorScheme = 'dark';
		} else {
		  document.documentElement.className = 'light';
		  document.documentElement.style.colorScheme = 'light';
		}
	  })();
	`;

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* Inject the theme initializer script */}
				<script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
			</head>
			<body className={cn(fontMono.variable, fontSans.variable, "font-mono antialiased")}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
					<Navbar className="px-8 md:px-16 lg:px-32" />
					<div className="container py-0 px-8 md:px-16 lg:px-32 mx-auto">{children}</div>

					<motion.footer className="my-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: "some" }} variants={sectionContainerVariants}>
						<motion.div className="container py-0 mx-auto flex items-center justify-center px-4" variants={sectionChildVariants}>
							<section id="contact">
								<h1 className="flex flex-row items-center justify-center">
									Contact Me
									<svg className="w-2 md:w-3 ms-2 text-accent" viewBox="0 0 18.55445 54.01644">
										<path
											d="M8.10362,46.43244c.28319,.03861,.55407,.11022,.81967,.2157l-.5972-.25202c.28283,.12001,.54394,.27233,.78997,.45621l-.50597-.39091c.28528,.22247,.53512,.47696,.75679,.76273l-.39091-.50597c.21886,.2929,.40011,.60545,.54737,.94011l-.25202-.5972c.15145,.36094,.25748,.73249,.31603,1.11961l-.0893-.6646c.04735,.35752,.05177,.71288,.00702,1.07095l.0893-.6646c-.04458,.30422-.12333,.59608-.24127,.88015l.25202-.5972c-.10519,.23721-.23336,.45768-.38788,.66618l.39091-.50597c-.16965,.21775-.36037,.4103-.57561,.58307l.50597-.39091c-.25652,.19669-.53262,.35542-.82963,.4826l.5972-.25202c-.326,.13216-.66155,.2213-1.00939,.27317l.6646-.0893c-.40253,.05292-.80446,.05384-1.20738,.00429l.6646,.0893c-.37544-.0526-.73758-.14726-1.08929-.28902l.5972,.25202c-.32148-.13648-.62004-.30761-.89675-.52103l.50597,.39091c-.21321-.17175-.40358-.36213-.57356-.57683l.39091,.50597c-.17213-.22817-.31202-.4708-.42368-.73394l.25202,.5972c-.10722-.27158-.17838-.54888-.21742-.83818l.0893,.6646c-.03521-.31528-.03086-.6276,.0086-.94228l-.0893,.6646c.05409-.37088,.15427-.7267,.29698-1.07319l-.25202,.5972c.15006-.34642,.33698-.66911,.5627-.97176l-.39091,.50597c.22958-.29654,.48839-.56102,.78294-.79339l-.50597,.39091c.25299-.19154,.52138-.35187,.81192-.47976l-.5972,.25202c.26936-.11135,.54444-.18939,.8326-.23362l-.6646,.0893c.13336-.01705,.26584-.02714,.4002-.03053,.65107-.01643,1.30307-.26753,1.76777-.73223,.43361-.43361,.76013-1.14502,.73223-1.76777-.0594-1.32624-1.09943-2.53535-2.5-2.5-1.46837,.03706-2.71681,.59126-3.84362,1.50071-.95892,.77395-1.58542,1.85721-2.0172,2.99266-.42866,1.12724-.46612,2.45776-.16528,3.62035,.35511,1.37235,1.22185,2.4391,2.34158,3.26362,.9608,.70748,2.1352,1.00211,3.30212,1.11944,1.18937,.11958,2.35896-.174,3.43404-.66127,2.15975-.9789,3.49069-3.47611,3.19726-5.81238-.11237-.89466-.30235-1.59313-.67307-2.41713-.26417-.58716-.65189-1.10244-1.06825-1.59127-.8073-.94782-2.08094-1.72722-3.32392-1.89667-.69739-.09507-1.29166-.11942-1.9264,.25202-.51858,.30347-1.01315,.89808-1.1489,1.49408-.14576,.63997-.11422,1.35833,.25202,1.9264,.32548,.50484,.86904,1.06369,1.49408,1.1489h0Z"
											fill="currentColor"
										/>
										<path
											d="M10.37517,36.24436c-1.60825-5.17464-2.73778-10.52642-3.75147-15.84445-.27505-1.44295-.53396-2.88908-.76979-4.33897-.22945-1.41068-.40471-2.60171-.53678-3.72136-.13426-1.13812-.2476-2.2806-.29661-3.42592-.01836-.42893-.02907-.85849-.02084-1.28781,.00356-.1859,.01538-.3712,.02084-.55693,.01461-.49704,.09971-.39029-.01066-.07955,.04187-.11788,.01537-.27755,.07993-.38674,.23369-.39522-.1968,.18729-.1123,.20914,.00183,.00047,.97225-1.08894,.96616-1.0843,.39857-.30371,.5834-.35304,1.16974-.48894,.54235-.1257,1.26791-.14495,2.02619-.1665,1.48183-.04211,2.72116-.12653,3.62921,.53211,.01833,.0133,.49029,.47879,.64415,.6288,.14401,.1404,.27061,.18853,.17818,.18857-.13307,.00005-.02197-.1419-.01284-.01026,.01091,.15729-.32282-.58533-.08205-.17467,.17548,.2993,.02772,.36701,.01559-.10653,.02065,.80678,.03942,1.58493-.03929,2.39283-.0226,.23197-.05031,.46333-.07841,.69467-.04576,.37669,.06219-.42217,.00357-.03395-.01643,.10882-.0312,.21793-.04887,.32656-.10124,.62259-.20733,1.24383-.32732,1.86315-.52583,2.71412-1.21314,5.39728-1.95023,8.06083-1.56865,5.66847-3.31037,11.35327-5.51749,16.8102-.50645,1.25217,.55123,2.74698,1.7461,3.0753,1.42864,.39255,2.56697-.48929,3.0753-1.7461,2.11331-5.22501,3.78818-10.66041,5.31412-16.08146,.83927-2.98156,1.62371-5.98796,2.20025-9.03269,.41706-2.20255,.87392-4.53907,.56167-6.78365C18.00764,2.4871,14.75251,.46845,11.76764,.1349,8.23427-.25995,4.15257,.08228,1.69124,2.92988,.11275,4.75609-.08417,6.6725,.02486,9.01347c.13526,2.904,.58291,5.80307,1.0554,8.66808,1.10129,6.67786,2.46268,13.42202,4.47351,19.89201,.95194,3.06293,5.78019,1.7558,4.8214-1.3292h0Z"
											fill="currentColor"
										/>
									</svg>
								</h1>
								<article>
									<p>
										Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi,
										I’ll try my best to get back to you!
									</p>
								</article>

								<div className="flex w-full justify-center items-center">
									<Button asChild size="blockToWide">
										<a href={"mailto:" + EMAIL_ADDRESS} className="mt-5">
											Say Hello
											<svg className="w-4 " viewBox="0 0 55.59259 56.25544">
												<path
													d="M24.81048,46.2293c-5.83304,3.20429-12.09918,5.31562-18.82194,4.98942l1.76777,4.26777c3.93218-3.53092,6.75979-7.61027,8.57262-12.57778,.48758-1.33606-.55936-2.6505-1.7461-3.0753-6.73816-2.41192-10.65947-10.46305-9.41863-17.34103,1.43661-7.96316,7.95791-14.25419,15.57926-16.50325,8.57917-2.53172,18.05152-.32338,24.17155,6.30351,5.58661,6.04929,7.33043,14.85931,4.0522,22.48266-1.85497,4.31365-5.14936,7.74961-9.36703,9.79513-4.1063,1.99151-8.4482,2.13786-12.86331,1.40685-1.33051-.22029-2.69124,.34835-3.0753,1.7461-.32868,1.19619,.40651,2.8535,1.7461,3.0753,2.32306,.38463,4.59262,.76049,6.95899,.62869,2.63963-.14702,5.2643-.68054,7.72394-1.65425,4.85537-1.92212,8.94309-5.24063,11.71176-9.68483,5.41151-8.6864,4.9778-20.09828-.97747-28.39303C44.38201,2.72135,33.55487-1.37524,22.72181,.40995,12.89893,2.02867,3.97621,9.10026,.95027,18.70567c-3.23181,10.25892,2.00364,22.26237,12.30336,25.94914l-1.7461-3.0753c-1.51597,4.15406-4.01471,7.4333-7.28676,10.37145-1.70215,1.52845-.27097,4.16884,1.76777,4.26777,7.57794,.36769,14.77482-2.06254,21.34553-5.67207,2.82098-1.54966,.30106-5.86903-2.5236-4.31735Z"
													fill="currentColor"
												/>
											</svg>
										</a>
									</Button>
								</div>

								<div className="flex w-full justify-center items-center mt-28 mb-4">
									<SocialLinkGroup orientation="horizontal" />
								</div>
							</section>
						</motion.div>
					</motion.footer>
				</ThemeProvider>
			</body>
		</html>
	);
}

const SocialLinkGroup = ({ orientation, className }: { orientation: "horizontal" | "vertical"; className?: string }) => {
	const anchorSvgClassName: ClassValue = "w-5 h-5 md:w-6 md:h-6 hover:text-accent transition-[fill] duration-200 ease-in";

	if (orientation === "horizontal") {
		return (
			<ul className={cn(className, "flex", "gap-x-12", "md:gap-x-16")}>
				<li>
					<a href={GITHUB_URL} target="_blank">
						<GitHubSvg className={cn(anchorSvgClassName)} />
					</a>
				</li>
				<li>
					<a href={LINKEDIN_URL} target="_blank">
						<LinkedInSvg className={cn(anchorSvgClassName)} />
					</a>
				</li>
				<li>
					<a href={"mailto:" + EMAIL_ADDRESS} target="_blank">
						<EmailSvg className={cn(anchorSvgClassName)} />
					</a>
				</li>
			</ul>
		);
	} else {
		return (
			<ul className={cn(className, "flex", "flex-col", "gap-y-12")}>
				<li>
					<a href={GITHUB_URL} target="_blank">
						<GitHubSvg className={cn(anchorSvgClassName)} />
					</a>
				</li>
				<li>
					<a href={LINKEDIN_URL} target="_blank">
						<LinkedInSvg className={cn(anchorSvgClassName)} />
					</a>
				</li>
				<li>
					<a href={"mailto:" + EMAIL_ADDRESS} target="_blank">
						<EmailSvg className={cn(anchorSvgClassName)} />
					</a>
				</li>
			</ul>
		);
	}
};
