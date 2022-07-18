/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["netflix-clone-project.s3.amazonaws.com"],
  },
  env: {
    REACT_APP_USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    REACT_APP_CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
    AWS_COGNITO_REGION: process.env.AWS_COGNITO_REGION,
    REACT_APP_COGNITO_IDENTITY_POOL_ID:
      process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
    REACT_APP_WEB_CLIENT_ID: process.env.REACT_APP_WEB_CLIENT_ID,
  },
};

module.exports = nextConfig;
