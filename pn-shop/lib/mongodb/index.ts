import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.NEXT_PUBLIC_DB_URL as string, {
  maxPoolSize: 10,
})

const clientPromise = client.connect()

export const getDb = async () => {
  const dbClient = await clientPromise
  return dbClient.db(process.env.NEXT_PUBLIC_DB_NAME)
}

export default clientPromise
