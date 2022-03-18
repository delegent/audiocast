import React, { useState } from "react";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import styles from "./StepEmail.module.css";
const phoneEmailMap = {
  phone: Phone,
  email: Email,
};
export default function StepPhoneEmail({ onNext }) {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];
  function onNext() {}
  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
		<div className={styles.buttonWrap}>
          <button className = {`${styles.tabButton} ${type == 'phone' ? styles.active : ''}`} onClick={() => setType("phone")}>💡</button>
          <button className = {`${styles.tabButton} ${type == 'email' ? styles.active : ''}`} onClick={() => setType("email")}>📂</button>
        </div>
        <Component onNext={onNext} />
		</div>
      </div>
    </>
  );
}
