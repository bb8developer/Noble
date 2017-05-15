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
    if (tag && tag.length > 0) {
      contactAPI.getContactsByTagFilter(`affiliate_${tag}`, cursor, pageSize, success, error);
    } else {
      resolve([]);
    }
  });
}
export function getNoteById(contactId) {
  return new Promise((resolve, reject) => {
    function success(data) {
      resolve({
        notes: data,
        contactId,
      });
    }
    function error() {
      console.log('error on resolve');
      reject();
    }
    contactAPI.getNoteByContactId(contactId, success, error);
  });
}

export async function getNoteByContactIds(ids) {
  const ret = [];
  for (let index = 0; index < ids.length; index += 1) {
    const contactId = ids[index];
    ret.push(await getNoteById(contactId));
  }
  return ret;
}
