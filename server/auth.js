const passport = require("passport");
const passportJWT = require("passport-jwt");
const config = require("./config");
const users = require("./users");
const ExtractJWT = passportJWT.ExtractJwt;

module.exports = (knex) => {
    const strategy = new passportJWT.Strategy({
        secretOrKey: config.jwtSecret,
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    }, async (payload, done) => {

        //Read JSON/Database data
        const user = await knex("users").where({id:payload.id});
        if (user[0]) {
            return done(null, {id: user[0].id});
        } else {
            return done(new Error("User Invalid"), null);
        }
    }
    )
    passport.use(strategy);

    return {
        initialize: function() {
            return passport.initialize();
        },
        authenticate: function() {
            return passport.authenticate("jwt", config.jwtSession);
        }
    }
};


