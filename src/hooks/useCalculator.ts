import { useState } from "react"

const useCalculator = (): {
	currentValue: string
	handleTap: (type: string, value?: number | string) => void
} => {
	const [currentValue, setCurrentValue] = useState<string>("0")
	const [previousValue, setPreviousValue] = useState<string>("")
	const [currentOperator, setCurrentOperator] = useState<string>("")
	const [isTotal, setIsTotal] = useState<boolean>(false)

	const handleTap = (type: string, value?: number | string): void => {
		setCurrentValue(currentState => {
			if (type === "number") {
				if (isTotal) {
					setIsTotal(false)
					return `${value}`
				} else if (currentState === "0") {
					return `${value}`
				} else if (currentState.length <= 8) {
					return `${currentState}${value}`
				} else {
					return `${currentState}`
				}
			}

			if (type === "operator" && value) {
				setPreviousValue(currentState)
				setCurrentOperator(value.toString())
				return "0"
			}

			if (type === "equal") {
				const current = parseFloat(currentState)
				const previous = parseFloat(previousValue)

				switch (currentOperator) {
					case "+":
						prepareForTotal()
						return `${previous + current}`
					case "-":
						prepareForTotal()
						return `${previous - current}`
					case "*":
						prepareForTotal()
						return `${previous * current}`
					case "/":
						prepareForTotal()
						return `${previous / current}`
					default:
						return `${currentState}`
				}
			}

			if (type === "clear") {
				clear()
				return "0"
			}

			if (type === "posneg") {
				return `${parseFloat(currentValue) * -1}`
			}

			if (type === "percentage") {
				return `${parseFloat(currentValue) * 0.01}`
			}

			return "0"
		})
	}

	const prepareForTotal = (): void => {
		setIsTotal(true)
		clear()
	}

	const clear = (): void => {
		setPreviousValue("")
		setCurrentOperator("")
	}

	return { currentValue, handleTap }
}

export default useCalculator
