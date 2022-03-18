import React from 'react'

export default function StepName({onNext}) {
  return (
	<div>
    		<h1>Stepname component</h1>
		<button onClick = {onNext}>Next</button>
  </div>
  )
}
