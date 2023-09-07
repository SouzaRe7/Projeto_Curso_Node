import mongoose from "mongoose";

// Chamo no app para a conexão aberta com o banco para fazer as transações

(async () => {
    if (process.env.DB_URL){
        await mongoose
        .connect(process.env.DB_URL)
        .then((res) => {
            console.log("MongoDB atlas connection succeeded");
        })
        .catch((err) => {
            console.log("Error in db collectiond: " + err);
        });
    }
})();

const db = mongoose.connection;

export default db;