import React,{useState} from 'react'
import Card from '../../../../components/shared/Card/Card';
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
export default function Email({ onNext }) {
  function startRegister() {

  }
  const [email,setEmail] = useState('');
  return (
	<div>
     <Card title="Enter your Email id" icon = '📩' >
     <TextInput value = {email} onChange={(e)=>{setEmail(e.target.value)}} />
      
      
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
