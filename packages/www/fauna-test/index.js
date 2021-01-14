const faunadb = require('faunadb');
const q = faunadb.query;

require('dotenv').config();

var client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });

async function run() {
    const results = await client.query(


        // ###====>>>> Create Query
        // q.Create(q.Collection("todos"),{
        //     data: {
        //         text: "coding",
        //         done: false,
        //         owner: "user-test2"
        //     }
        // })

        // ###====>>>> Update Query
        // q.Update(q.Ref(q.Collection("todos"),"287729127875674637"),{
        //     data: {
        //         done: true
        //     }
        // })

        // ###====>>>> Update Query
        q.Paginate(q.Match(q.Index("todos_by_user"), "user-test2"))


    );
    console.log(results);
}

run();
