class LoginService {
    constructor(knex) {
        this.knex = knex;
    }

    getUsers(email,password) {
        let query = this.knex
            .select("users.email", "users.password")
            .from("users")
            .where("users.email", "like", `%${email}%`)

        console.log("This is the login service");

        return query;
    }
}