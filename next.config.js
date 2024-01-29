module.exports = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" },
      "/event": { page: "/event" },
    };
  },
};
