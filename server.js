// import library
const express = require("express");
const session = require("express-session");
const exhbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const path = require("path");

// import routes
const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

// create app, Port and Sess with cookie and handlebars
const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
  secret: "Super secret secret",
  cookie: { sameSite: "strict" },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};

const hbs = exhbs.create({ helpers });

// app use middleware
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

// app set engine to handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// app.sync and listen
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now Listening"));
});
