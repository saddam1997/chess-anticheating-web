import 'server-only';
import { ObjectId } from 'mongodb';
import { db } from './mongo';

// Messages sent from the contact form.
const queries = async () => (await db()).collection('queries');

const toJson = ({ _id, email, message, createdAt }) => ({ id: _id.toString(), email, message, createdAt: createdAt.toISOString() });

export async function listQueries() {
  const docs = await (await queries()).find().sort({ createdAt: -1 }).limit(1000).toArray();
  return docs.map(toJson);
}

export async function addQuery({ email, message }) {
  await (await queries()).insertOne({ email, message, createdAt: new Date() });
}

export async function deleteQuery(id) {
  if (!ObjectId.isValid(id)) return false;
  const { deletedCount } = await (await queries()).deleteOne({ _id: new ObjectId(id) });
  return deletedCount === 1;
}
