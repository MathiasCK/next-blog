const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "MathiasCK",
        mongodb_password: "Xtrmck123",
        mongodb_clustername: "cluster0",
        mongodb_database: "next-blog-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "MathiasCK",
      mongodb_password: "Xtrmck123",
      mongodb_clustername: "cluster0",
      mongodb_database: "next-blog",
    },
  };
};
s;
