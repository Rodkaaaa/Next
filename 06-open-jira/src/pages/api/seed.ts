import { db, disconnectDb } from "@/database";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
 
  if ( process.env.NODE_ENV === 'production'){
      return res.status(401).json({message: "No tiene acceso a este servicio"})
  
    }
    await db();
  
    await disconnectDb();
 

  res.status(200).json({ message: "Proceso Creado Correctamente" });
}
