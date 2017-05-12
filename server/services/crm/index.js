/**
 * Created by nick on 11/05/2017.
 */
import AgileCRMManager from './agilecrm';
import config from '../../config/crm_config';

const agileInstance = new AgileCRMManager(config.domain, config.key, config.user);
const { contactAPI } = agileInstance;

export function getContactByTagFilter(tag, cursor, pageSize = 20) {
  return new Promise((resolve, reject) => {
    function success(data) {
      console.log('getContactByTagFilter success');
      resolve(data);
    }
    function error() {
      console.log('getContactByTagFilter failuer');
      reject();
    }
    contactAPI.getContactsByTagFilter(tag, cursor, pageSize, success, error);
  });
}
export function getNoteById(contactID) {
  return new Promise((resolve, reject) => {
    function success(data) {
      resolve(data);
      console.log('getNoteById success', new Date());
    }
    function error() {
      console.log('error on resolve');
      reject();
    }
    contactAPI.getNoteByContactId(contactID, success, error);
  });
}

export async function getNoteByContacts(contacts) {
  for (let index = 0; index < contacts.length; index += 1) {
    const contactId = contacts[index].id;
    contacts[index].note = await getNoteById(contactId);
  }
}
