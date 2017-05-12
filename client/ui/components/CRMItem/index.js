/**
 * Created by nick on 12/05/2017.
 */
import React from 'react';
import moment from 'moment';
import styles from '../../web/styles/components/CRMItem.scss';

export const CRMItem = ({ item, index }) => {
  let rowStyle = styles.normalContainer;
  if (index % 2 === 0) {
    rowStyle = styles.grayContainer;
  }
  const createdDate = new Date(item.created_time * 1000);
  const properties = JSON.parse(item.properties);
  let name = '';
  properties.forEach((property) => {
    if (property.name === 'first_name') {
      name = property.value;
    }
  });
  const notes = JSON.parse(item.note);
  const note = notes.length > 0 ? notes[0] : null;
  return (
    <div className={`${styles.rowContainer} ${rowStyle}`}>
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.created}>
        {moment(createdDate).format('MMM Do hh:mm a')}
      </div>
      <div className={styles.lastNote}>
        {note && note.description}
      </div>
      <div className={styles.lastNoteDate}>
        {note && moment(note.created_time * 1000).format('MMM Do hh:mm a')}
      </div>
      <div className={styles.notes}>
        Notes
      </div>
    </div>
  );
};
