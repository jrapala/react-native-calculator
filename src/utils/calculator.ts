interface Calculator {
	currentOperator: string
	currentValue: string
	isTotal: boolean
	newValue?: number | string
	previousValue: string
	setCurrentOperator: React.Dispatch<React.SetStateAction<string>>
	setIsTotal: React.Dispatch<React.SetStateAction<boolean>>
	setPreviousValue: React.Dispatch<React.SetStateAction<string>>
	type: string
}

const calculator = ({
	currentOperator,
	currentValue,
	isTotal,
	newValue,
	previousValue,
	setCurrentOperator,
	setIsTotal,
	setPreviousValue,
	type,
}: Calculator): string => {
	const prepareForTotal = (): void => {
		setIsTotal(true)
		clear()
	}

	const clear = (): void => {
		setPreviousValue("")
		setCurrentOperator("")
	}

	if (type === "number") {
		if (isTotal) {
			setIsTotal(false)
			return `${newValue}`
		} else if (currentValue === "0") {
			return `${newValue}`
		} else if (currentValue.length <= 8) {
			return `${currentValue}${newValue}`
		} else {
			return `${currentValue}`
		}
	}

	if (type === "operator" && newValue) {
		setPreviousValue(currentValue)
		setCurrentOperator(newValue.toString())
		return "0"
	}

	if (type === "equal") {
		const current = parseFloat(currentValue)
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
				return `${currentValue}`
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
}

export default calculator
