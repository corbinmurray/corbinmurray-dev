import { Button } from "@repo/ui/components/button";
import SectionHeader from "@repo/ui/components/section-header";

export default function Page() {
	return (
		<div className="flex items-center justify-center min-h-svh">
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="text-2xl font-bold">Hello World</h1>
				<Button size="sm">Button</Button>
				<SectionHeader title="test" />
			</div>
		</div>
	);
}
