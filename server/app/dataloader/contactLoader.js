/**
 * Created by nick on 15/05/2017.
 */
import DataLoader from 'dataloader';
import { getContactByTagFilter } from '../../services/crm';

export const contactLoader = new DataLoader(searchOptions =>
  Promise.all(searchOptions.map(item =>
    getContactByTagFilter(item.tag, item.cursor, item.pageSize)
  ))
);

