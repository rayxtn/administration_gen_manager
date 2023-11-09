import oracledb from "oracledb";

async function ConnectDB() {

const connectString = process.env.oracle_uri;
const user = process.env.oracle_user;
const passwd = process.env.oracle_passwd;

    try {
       let conn = await oracledb.getConnection({
            user: user ,
            password: passwd,
            connectString: connectString,
        });
         console.log("Oracle Database Connected !");
        const result =  conn.execute("select * from dbase.MILITAIRE M where M.MAT = '03889/2017'");
        return result;

    } catch (err) {
        console.error("Error:", err.message);
        process.exit(1);
    } 
}

export default ConnectDB;