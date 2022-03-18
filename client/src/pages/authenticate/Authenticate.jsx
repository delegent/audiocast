import React, { useState} from 'react'
import StepOtp from '../Steps/StepOtp/StepOtp';
import StepPhoneEmail from '../Steps/StepPhoneEmaill/StepPhoneEmail';
const steps = {

	1:StepPhoneEmail,
	2:StepOtp
}
export default function Authenticate () {
	const [step,setStep] = useState(1);
	const Step = steps[step]; 
	function onNext(){
		setStep(step+1);
	}
  return (
	<div>
		<Step onNext={onNext} />
	</div>
  )
}
