const faunadb = require('faunadb');
const q = faunadb.query;

require('dotenv').config();

var client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });

async function run() {
    const results = await client.query(
        q.Create(q.Collection("todos"),{
            data: {
                text: "task 4",
                done: false,
                owner: "user-test"
            }
        })
    );
    console.log(results.ref.id);
}

run();
