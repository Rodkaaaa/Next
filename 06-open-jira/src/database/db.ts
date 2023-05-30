import mongoose from "mongoose";

/**
 * 0 = disconected
 * 1 = conected
 * 2 = conecting
 * 3 = disconecting
 */

const mongoConnection = {
  isConnected: 0,
};

export const connectDb = async () => {
  if (mongoConnection.isConnected) {
    console.log("ya estamos conectados");
    return;
  }
  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === 1) {
      console.log("Usando conexión anterior");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL || "");
  mongoConnection.isConnected = 1;
  console.log("conectado a MongoDB", process.env.MONGO_URL);
};

export const disconnectDb = async () => {

  if ( process.env.NODE_ENV === 'development') return;

  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
  console.log("Desconectado de MongoDB");
};
