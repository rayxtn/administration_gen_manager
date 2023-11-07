import oracledb from "oracledb";

async function ConnectDB() {

const connectString = process.env.oracle_uri;
const user = process.env.oracle_user;
const passwd = process.env.oracle_passwd;

    try {
        await oracledb.createPool({
            user: user ,
            password: passwd,
            connectString: connectString,
        });
         console.log("Oracle Database Connected !");

    } catch (err) {
        console.error("Error:", err.message);
        process.exit(1);
    } finally {
        await oracledb.getPool().close();
    }
}

export default ConnectDB;