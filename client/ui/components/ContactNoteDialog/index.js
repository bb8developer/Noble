/**
 * Created by nick on 12/05/2017.
 */
import React from 'react';
import styles from '../../web/styles/components/ContactNoteDialog.scss';

export const ContactNoteDialog = ({ title, notes }) => (
  <div className={styles.container}>
    <div className={styles.dialogContainer}>
      <div className={styles.title}>
        Test L. Notess
      </div>
      <div className={styles.noteList}></div>
      <div className={styles.bottom}>
        <div className={styles.button}>
          Close
        </div>
      </div>
    </div>
  </div>
);
