/**
 * Created by nick on 12/05/2017.
 */
import React from 'react';
import moment from 'moment';
import styles from '../../web/styles/components/CRMItem.scss';

export const CRMItem = ({ item, showNote, index }) => {
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
    if (property.name === 'last_name') {
      name = `${name} ${property.value[0].toUpperCase()}.`;
    }
  });
  let notes = null;
  let note = null;
  let description = 'Loading Notes...';
  if (item.notes) {
    notes = item.notes;
    note = notes.length > 0 ? notes[0] : null;
    description = note ? note.description : 'No Notes';
  }
  const renderNotes = () => {
    if (notes && notes.length > 0) {
      return (
        <div className={styles.viewNote} onClick={() => showNote(notes, name)}>
          View all notes({notes.length})
        </div>
      );
    }
    return <div>No Notes</div>;
  };
  return (
    <div className={`${styles.rowContainer} ${rowStyle}`}>
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.created}>
        {moment(createdDate).format('MMM Do hh:mm a')}
      </div>
      <div className={styles.lastNote}>
        {description}
      </div>
      <div className={styles.lastNoteDate}>
        {note && moment(note.created_time * 1000).format('MMM Do hh:mm a')}
      </div>
      <div className={styles.notes}>
        {renderNotes(notes)}
      </div>
    </div>
  );
};
