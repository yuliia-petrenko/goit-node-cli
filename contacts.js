import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

const contactsPath = path.resolve('db', 'contacts.json');

export async function listContacts() {
  const contactsBuffer = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(contactsBuffer) || [];
}

export async function getContactById(contactId) {
  const contacts = await listContacts();
  return contacts.find(({ id }) => id === contactId) || null;
}

export async function removeContact(contactId) {
  const contacts = await listContacts();
  const idx = contacts.findIndex(({ id }) => id === contactId);
  if (idx === -1) {
    return null;
  }
  const deletedContact = contacts.splice(idx, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return deletedContact;
}

export async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}
