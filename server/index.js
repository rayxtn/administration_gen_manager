import oracledb from "oracledb";
import express from "express";

const mypw = "RH2020*";
const connectString = "192.168.0.204/MYDBASE";

async function run() {

    try{
        const port = 3000;
        const app = express();
        app.listen(port, ()=>{
            console.log("Server Running On port " + port);
        })
        }catch(err){
            console.log(err);
        }
    try {
        await oracledb.createPool({
            user: "RHOUIMLI",
            password: mypw,
            connectString: connectString,
        });
        // const connection = await oracledb.getConnection();
        // const result = await connection.execute("SELECT * FROM your_table_name");
        // console.log("Query Result:", result.rows);
        // app.listen(port, "app is running on port");
         //await connection.close();
         console.log("database connected !");

    } catch (err) {
        console.error("Error:", err.message);
    } finally {
        await oracledb.getPool().close();
    }
}

run();
