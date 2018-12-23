import { MongoClient, Db } from "mongodb";

class DbClient {
    public db: Db;

    public connect() { 
        
        return MongoClient.connect("mongodb://localhost:27017/test")
        .then(db => {
            this.db = db;
        })
        .catch(err => {
            console.log(err);
        });
     }
}

export = new DbClient();