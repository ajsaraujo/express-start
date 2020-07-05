import mongoose from "mongoose";

const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const connection = mongoose.connect(uri, options);

mongoose.connection.once("open", _ => {
    console.log("App connected with mongo.");
});

mongoose.connection.on("error", _ => {
    console.log("Error connecting with mongo.");
});

export default connection;
