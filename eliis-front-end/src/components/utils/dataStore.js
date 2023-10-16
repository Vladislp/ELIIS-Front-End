import { JsonDB, Config } from 'node-json-db';

const db = new JsonDB(new Config("eventsDatabase", true, false, '/'));

export default db;
