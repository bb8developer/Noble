/**
 * Created by nick on 15/05/2017.
 */
import DataLoader from 'dataloader';
import { getNoteById } from '../../services/crm';

export const noteLoader = new DataLoader(contactIds => Promise.all(contactIds.map(getNoteById)));

