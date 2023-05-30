import { isValidObjectId } from "mongoose"
import { Entry, IEntry } from "@/models";
import { disconnectDb } from './db';
import { db } from ".";


export const getEntryById = async(id: string): Promise<IEntry> | null => {

    if(!isValidObjectId(id)) return null;

    await db();
    const entry = await Entry.findById(id).lean();
    await disconnectDb();

    return JSON.parse(JSON.stringify(entry)) ;


}

