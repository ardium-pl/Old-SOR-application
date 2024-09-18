import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export async function createTestConnection() {
  return mysql.createConnection(process.env.MYSQL_URL);
}

export async function getConnection() {
  return await createTestConnection();
}