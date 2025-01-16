/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["@repo/ui"],
	async rewrites() {
		return [
			{
				source: "/projects",
				destination: `${[process.env.PROJECTS_DOMAIN]}`,
			},
			{
				source: "/projects/:path*",
				destination: `${[process.env.PROJECTS_DOMAIN]}/:path*`,
			},
		];
	},
};

export default nextConfig;
