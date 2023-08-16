module.exports = {
    HOST: "containers-us-west-149.railway.app",
    USER: "root",
    PASSWORD: "NmmcmNh8CLkcbQbrPQLw",
    PORT:6032,
    DB: "railway",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };