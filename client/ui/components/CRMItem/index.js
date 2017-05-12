/**
 * Created by nick on 12/05/2017.
 */
import React from 'react';
import styles from '../../web/styles/components/CRMItem.scss';

export const CRMItem = ({ item }) => {
  return (
    <div key={item.id}>
      {item.properties}
    </div>
  );
}