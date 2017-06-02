/**
 * Created by nick on 12/05/2017.
 */
import React from 'react';
import moment from 'moment';
import styles from '../../web/styles/components/ContactNoteDialog.scss';

export const ContactNoteDialog = ({ onClose, notes, name }) => {
  console.log('note', notes);
  return (
    <div className={styles.container}>
      <div className={styles.dialogContainer}>
        <div className={styles.title}>
          {name} Notes
        </div>
        <div className={styles.noteList}>
          <div className={styles.row}>
            <div className={`${styles.date} ${styles.header}`}>Date</div>
            <div className={`${styles.note} ${styles.header}`}>Note</div>
          </div>
          {notes.map(note => (
            <div className={`${styles.row} ${styles.noTopBorder}`}>
              <div className={styles.date}>
                {moment(new Date(note.created_time * 1000)).format('MMM Do hh:mm a')}
              </div>
              <div className={styles.note}>{note.description}</div>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <div className={styles.button} onClick={onClose}>
            Close
          </div>
        </div>
      </div>
    </div>
  );
};
