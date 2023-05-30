import { connectDb as db, disconnectDb } from "./db";
import { seedData } from "./seed-data";
import { getEntryById } from "./dbEntries";
export { db, disconnectDb, seedData, getEntryById };
