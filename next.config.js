module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['3.87.58.239','54.91.160.228','www.moalen.sa','localhost','*'],
    allowFutureImage: true,
    loader: 'custom',
    path: '/',
  }
}
