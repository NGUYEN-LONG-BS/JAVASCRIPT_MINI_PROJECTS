import sql from 'mssql';
import { config } from './config.js';

const connectToDatabase = async () => {
try {
await sql.connect(config);
console.log('Connected to the database!');
} catch (err) {
console.error('Database connection failed:', err);
}
};

connectToDatabase();