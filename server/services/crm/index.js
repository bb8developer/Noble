/**
 * Created by nick on 11/05/2017.
 */
import AgileCRMManager from './agilecrm';
import config from '../../config/crm_config';

const agileInstance = new AgileCRMManager(config.domain, config.key, config.user);
const { contactAPI } = agileInstance;

export function getContactByTagFilter(tag, cursor) {
  return new Promise((resolve, reject) => {
    function success(data) {
      console.log('getContactByTagFilter success');
      resolve(data);
    }
    function error() {
      console.log('getContactByTagFilter failuer');
      reject();
    }
    contactAPI.getContactsByTagFilter(tag, cursor, success, error);
  });
}
