/**
 * Created by nick on 12/05/2017.
 */
import React from 'react';
import styles from '../../web/styles/components/CRMItem.scss';

export const CRMItem = ({ item, index }) => {
  let rowStyle = styles.normalContainer;
  if (index % 2 === 0) {
    rowStyle = styles.grayContainer;
  }
  return (
    <div className={`${styles.rowContainer} ${rowStyle}`}>
      <div className={styles.name}>
        Name
      </div>
      <div className={styles.created}>
        Created
      </div>
      <div className={styles.lastNote}>
        Latest Note
      </div>
      <div className={styles.lastNoteDate}>
        Latest Note date
      </div>
      <div className={styles.notes}>
        Notes
      </div>
    </div>
  );
};
