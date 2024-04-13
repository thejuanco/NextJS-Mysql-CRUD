import mysql from 'serverless-mysql'

export const conn = mysql({
    //Parametros de configuracion
    config: {
        host: 'localhost',
        user: 'root',
        password: 'juanpass',
        port: 3306,
        database: 'nextmysqlcrud'
    }
})