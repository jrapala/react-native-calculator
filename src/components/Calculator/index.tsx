import React, { Fragment, useState } from "react"

import Row from "../Row"
import CalculatorTotal from "../CalculatorTotal"
import CalculatorButton from "../CalculatorButton"

const Calculator: React.FC = () => {
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

	return (
		<Fragment>
			<CalculatorTotal total={currentValue} />
			<Row>
				<CalculatorButton
					text="AC"
					onPress={(): void => handleTap("clear")}
					componentTheme="secondary"
				/>
				<CalculatorButton
					text="+/-"
					onPress={(): void => handleTap("posneg")}
					componentTheme="secondary"
				/>
				<CalculatorButton
					text="%"
					onPress={(): void => handleTap("percentage")}
					componentTheme="secondary"
				/>
				<CalculatorButton
					text="&#247;"
					onPress={(): void => handleTap("operator", "/")}
					componentTheme="accent"
				/>
			</Row>
			<Row>
				<CalculatorButton
					text="7"
					onPress={(): void => handleTap("number", 7)}
				/>
				<CalculatorButton
					text="8"
					onPress={(): void => handleTap("number", 8)}
				/>
				<CalculatorButton
					text="9"
					onPress={(): void => handleTap("number", 9)}
				/>
				<CalculatorButton
					text="&#215;"
					onPress={(): void => handleTap("operator", "*")}
					componentTheme="accent"
				/>
			</Row>
			<Row>
				<CalculatorButton
					text="4"
					onPress={(): void => handleTap("number", 4)}
				/>
				<CalculatorButton
					text="5"
					onPress={(): void => handleTap("number", 5)}
				/>
				<CalculatorButton
					text="6"
					onPress={(): void => handleTap("number", 6)}
				/>
				<CalculatorButton
					text="&#8211;"
					onPress={(): void => handleTap("operator", "-")}
					componentTheme="accent"
				/>
			</Row>
			<Row>
				<CalculatorButton
					text="1"
					onPress={(): void => handleTap("number", 1)}
				/>
				<CalculatorButton
					text="2"
					onPress={(): void => handleTap("number", 2)}
				/>
				<CalculatorButton
					text="3"
					onPress={(): void => handleTap("number", 3)}
				/>
				<CalculatorButton
					text="+"
					onPress={(): void => handleTap("operator", "+")}
					componentTheme="accent"
				/>
			</Row>
			<Row>
				<CalculatorButton
					text="0"
					onPress={(): void => handleTap("number", 0)}
					size="double"
				/>
				<CalculatorButton
					text="."
					onPress={(): void => handleTap("number", ".")}
				/>
				<CalculatorButton
					text="="
					onPress={(): void => handleTap("equal")}
					componentTheme="accent"
				/>
			</Row>
		</Fragment>
	)
}

export default Calculator
