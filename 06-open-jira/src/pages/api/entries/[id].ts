import { db, disconnectDb } from "@/database";
import { Entry, IEntry } from "@/models";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = 
 | {message: string}
 | IEntry
;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: `El ID: ${id}. No es valido` });
  }

  switch (req.method) {
    case "GET":
      return getEntry(req, res);

    case "PUT":
      return updateEntry(req, res);

    default:
      return res.status(400).json({ message: "metodo no existe" });
  }
}


const updateEntry = async(req:NextApiRequest, res:NextApiResponse<Data>) => {
    
    const { id } = req.query;
    await db();

    const entryToUpdate = await Entry.findById(id)

    if(!entryToUpdate){
        await disconnectDb();
        return res.status(400).json({message:'No hay entrada con ese ID:' + id})
    }

    const{
        description = entryToUpdate.description,
        status = entryToUpdate.status,
    } = req.body
    
    try {
        
        const updatedEntry = await Entry.findByIdAndUpdate(id, {description, status},{runValidators: true, new: true});
        await disconnectDb();
        res.status(200).json(updatedEntry!);
        // entryToUpdate.description = description;
        // entryToUpdate.status = status;
        // await entryToUpdate.save();
    } catch (error: any) {
        await disconnectDb();
        res.status(400).json({message: error.errors.status.message});
    }

}

const getEntry = async(req:NextApiRequest, res: NextApiResponse<Data>) => {
  
  const { id } = req.query;
  await db();

  const entryGet = await Entry.findById(id)
 
  if (!entryGet) {
    await disconnectDb();
    return res.status(400).json({message:'No hay entrada con ese ID: ' + id})
  }
   await disconnectDb();
  
   return res.status(200).json(entryGet)
}