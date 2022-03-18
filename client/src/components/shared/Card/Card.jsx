import React from 'react';
import styles from './Card.module.css';
export default function Card({title,icon,children}) {
  return (
	<div className={styles.card}>
	<div className={styles.headinWrapper}>
	  <h1 className={styles.heading}>{icon} {title}</h1>
	</div>
	{children}
  </div>
  );
}
