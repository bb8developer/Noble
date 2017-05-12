/**
 * Created by nick on 12/05/2017.
 */
import React from 'react';
import styles from '../../web/styles/components/CRMItem.scss';

export const CRMItemHeader = () => (
  <div className={styles.rowContainer}>
    <div className={`${styles.name} ${styles.header}`}>
      Name
    </div>
    <div className={`${styles.created} ${styles.header}`}>
      Created
    </div>
    <div className={`${styles.lastNote} ${styles.header}`}>
      Latest Note
    </div>
    <div className={`${styles.lastNoteDate} ${styles.header}`}>
      Latest Note date
    </div>
    <div className={`${styles.notes} ${styles.header}`}>
      Notes
    </div>
  </div>
);
