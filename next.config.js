// /** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
//   images: {
//   remotePatterns: [
//     {
//       protocol: 'https',
//       hostname: 'i.pinimg.com',
//       port: '',
//       pathname: '/564x/20/d5/a7/',
//     },
//   ],
// },
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co','lh3.googleusercontent.com','images.pendect.com','i.pinimg.com','cdn-icons-png.flaticon.com','miro.medium.com'],
  },
    reactStrictMode: true,
    
  
}

module.exports = nextConfig
