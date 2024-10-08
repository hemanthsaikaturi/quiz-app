import { getDatabase } from 'firebase/database';
import app from './config';

// Get a reference to the Firebase Realtime Database
const db = getDatabase(app);

export { db };
