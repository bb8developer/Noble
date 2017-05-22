/**
 * Created by nick on 15/05/2017.
 */
import DataLoader from 'dataloader';
import { getContactByTagFilter } from '../../services/crm';

export const contactLoader = new DataLoader(searchOptions =>
  Promise.all(searchOptions.map((query) => {
    const items = query.split('::');
    return getContactByTagFilter(items[0], items[1], items[2]);
  }))
);

