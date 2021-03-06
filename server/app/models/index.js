const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./user.model.js")(mongoose);
db.referee = require("./referee.model.js")(mongoose);
db.hotels = require("./hotel.model.js")(mongoose);
db.sponsors = require("./sponsor.model.js")(mongoose);
db.faqs = require("./faq.director.model.js")(mongoose);
db.hoteldirector = require("./hotel.director.model.js")(mongoose);
db.Volunteers = require("./volunteer.list.model")(mongoose);
db.TeamApplications = require("./team.applications.model")(mongoose);
db.AssignedMatches = require("./schedule.matches.model")(mongoose);

module.exports = db;
