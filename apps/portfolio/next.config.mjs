/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  async rewrites() {
    return [
      {
        source: "/projects",
        destination: `${process.env.PROJECTS_DOMAIN}/projects`
      },
      {
        source: "/projects/:path",
        destination: `${process.env.PROJECTS_DOMAIN}/projects/:path`
      }
    ]
  }
}

export default nextConfig
