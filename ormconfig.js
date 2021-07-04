module.exports = {
        "type":"postgres",
        "url": process.env.DATABASE_URL,
    
        "connectionString": "connectionString",
        "ssl": { "rejectUnauthorized": false },
        "entities": [
            "./dist/models/*.js"
        ],
        "migrations": [
            "./dist/database/migrations/*.js"
        ],
        "cli": {
            "migrationsDir": "./src/database/migrations"
        }
    }