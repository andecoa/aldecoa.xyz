const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = (phase, defaultConfig) => {
  const newConfig = defaultConfig;
  newConfig.target = "serverless";
  return withBundleAnalyzer(newConfig);
};
