/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["@repo/ui"],
	async rewrites() {
		return [
			{
				source: "/projects",
				destination: `http://localhost:3001`,
			},
			{
				source: "/projects/:path*",
				destination: `http://localhost:3001/:path*`,
			},
		];
	},
};

export default nextConfig;
