import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import styles from './Home.module.css'
import Button from '../../components/shared/Button/Button';
function Home() {
  const signInLinkStyle = {
    color:'0077ff',
    fontWeight:"bold",
    textDecoration:'none',
    marginLeft:'20px'
  }
  const history = useHistory();
  function startRegister(){
   history.push('/authenticate');
  }

  return (
	  <div className={styles.cardWrapper}>
    <Card title="Welcome to Audiocast!" icon = "🎧">
      
    <p className={styles.text}>
        This is the staging app that gives us the 
        functionality of connecting with the peoples through 
        the medium of their voice.
      </p>
      <div>
          <Button onClick = {startRegister} text="Get your username" />
      </div>
      <div className={styles.signInWrapper}>
        <span className={styles.hasInvite}>Have a invite text?</span>
      </div>
    </Card>
      {/* <div className={styles.card}>
      <div className={styles.headinWrapper}>
        <h1 className={styles.heading}>🎧 Welcome to Audiocast</h1>
      </div>
      <p className={styles.text}>
        This is the staging app that gives us the 
        functionality of connecting with the peoples through 
        the medium of their voice.
      </p>
      <div>
        <button><span>Get your username 🙂</span></button>
      </div>
      <div>
        <span>Have a invite text</span>
        <Link to = "/login" >Signin</Link>
      </div>
    </div> */}
    </div>
  );
}

export default Home;
