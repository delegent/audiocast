import React, {useState} from 'react'
import Card from '../../../components/shared/Card/Card'
import TextInput from '../../../components/shared/TextInput/TextInput'
import Button from '../../../components/shared/Button/Button'
import styles from './StepOtp.module.css'
export default function StepOtp({onNext}) {
	const [otp,setOtp] = useState('');
	function next(){
		
	}
  return (
	<>

		<div className={styles.cardWrapper}>
			<Card
			
			title="Enter the code we just texted you"
			icon="🔒"
			>
			<TextInput value={otp} onChange={(e)=>setOtp(e.target.value)} />
			<div className={styles.actionButtonWrap}>
				<Button onClick={next} type="Next" />
			</div>
			<p className = {styles.bottomParagraph}> 
				By entering your number , you're agreeing to our Terms of service 
				and Privacy Policy. Thanks!
			</p>
			</Card>
		</div>

	</>
  )
}
