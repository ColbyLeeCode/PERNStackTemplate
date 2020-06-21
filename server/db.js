const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "a2u93vtss",
    host: "localhost",
    port: 5432,
    database: "DashServ"
});

module.exports = pool;