import { MongoClient, Db } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/'
const MONGODB_DB = process.env.DATABASE_NAME || 'velora_salon'

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  try {
    const client = new MongoClient(MONGODB_URI)
    await client.connect()
    
    const db = client.db(MONGODB_DB)
    
    cachedClient = client
    cachedDb = db
    
    console.log('✅ Connected to MongoDB')
    return { client, db }
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    throw error
  }
}

export async function getCollection(collectionName: string) {
  const { db } = await connectToDatabase()
  return db.collection(collectionName)
}