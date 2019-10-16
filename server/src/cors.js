// for cross site scripting
module.export = function(app) {
  const cors = require("cors");
  const corOption = {
    origin: function(origin, callback) {
      //if in cors whitelist will allow otherwise
      if (process.env.CORS_WHITELIST.split("").indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
  };
  app.option("*", cors(corsOptions));
  app.use(cors(corsOptions));
};
