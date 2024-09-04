
import { MongoClient, ServerApiVersion } from 'mongodb';
require("dotenv").config()
const uri = process.env.DATABASE_URL

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const dbname = 'shophack'

export const db = client.db(dbname)

