import mongoose from "mongoose";
import { disconnect } from "process";

/**  
* 0 = disconected
* 1 = conected
* 2 = conecting
* 3 = disconecting
*/

const mongooConnection = {
    isConnected:0
}

export const connect = async () => {
    if( mongooConnection.isConnected ){
        console.log("ya estamos conectados")
        return;
    }
    if ( mongoose.connections.length > 0 ) {
        mongooConnection.isConnected = mongoose.connections[0].readyState;

        if ( mongooConnection.isConnected === 1 ) {
            console.log('Usando conexión anterior')
            return;
        }

        await mongoose.disconnect();

    }

    await mongoose.connect('....');
    mongooConnection.isConnected = 1;
    console.log('conectado a MongoDB', '.....')
}

export const disconnectDb = async() => {
    
    if (mongooConnection.isConnected !== 0) return;
    
    await mongoose.disconnect();
    console.log('Desconectado de MongoDB')
}