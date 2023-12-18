/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, {isServer}) => {
        if (!isServer) {
            config.resolve.fallback = {
                prisma: false,
                bcrypt: false
            }
        }
        return config
    }
}

module.exports = nextConfig
