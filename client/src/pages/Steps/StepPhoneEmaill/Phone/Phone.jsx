import React,{useState} from 'react'
import Card from '../../../../components/shared/Card/Card';
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput';
import styles from '../StepEmail.module.css';
export default function Phone({ onNext }) {
  function startRegister(){
     
  }
  const phoneicon = '<i class="fa-solid fa-mobile-screen"></i>';
  const [phoneNumber,setPhoneNumber] = useState('');
  return (
	<div>
     <Card title="Enter your Phone Number" icon = '📞' >
        <TextInput value = {phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} />
      
        <div>
            <div className={styles.actionButtonWrap}>
            <Button onClick = {onNext} text="Next"  />
            </div>
            <p className={styles.bottomParagraph}>
              By entering your phone number , you're agreeing to our Terms of Service 
              and Privacy Policy. Thanks!
            </p>
        </div>
        
      </Card>
  </div>
  )
}
