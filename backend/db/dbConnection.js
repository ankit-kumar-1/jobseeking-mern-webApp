import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "JOBSEEKING"
    }).then(() => {
        console.log("database connected")
    })
        .catch((err) => {
            console.log(`error occur in db connection: ${err}`)
        })
}