import { MongoClient } from 'mongodb'
import { connect } from 'mongoose'
import 'dotenv/config'

// Connection URL
const url = process.env.MONGOCLUST as string;
// const client = new MongoClient(url);

// using mongoose
export default connect(url)

// Database Name
// const dbName = 'barbearia';

// const connection = async () => {
//   try {
//     // Use connect method to connect to the server
//     await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db(dbName);
//     return db
//   } catch (err) {
//     return err
//   }
// }

// export default connection
