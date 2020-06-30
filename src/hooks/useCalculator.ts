import { useState } from "react"

import calculator from "../utils/calculator"

const useCalculator = (): {
	currentValue: string
	handleTap: (type: string, value?: number | string) => void
} => {
	const [currentValue, setCurrentValue] = useState<string>("0")
	const [previousValue, setPreviousValue] = useState<string>("")
	const [currentOperator, setCurrentOperator] = useState<string>("")
	const [isTotal, setIsTotal] = useState<boolean>(false)

	const handleTap = (type: string, newValue?: number | string): void => {
		const calculatorState = {
			currentOperator,
			isTotal,
			newValue,
			previousValue,
			setCurrentOperator,
			setIsTotal,
			setPreviousValue,
			type,
		}

		setCurrentValue(currentState => {
			return calculator(
				Object.assign(calculatorState, { currentValue: currentState })
			)
		})
	}

	return { currentValue, handleTap }
}

export default useCalculator
