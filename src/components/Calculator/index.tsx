import React, { Fragment, useState } from "react"

import Row from "../Row"
import CalculatorTotal from "../CalculatorTotal"
import CalculatorButton from "../CalculatorButton"

const Calculator: React.FC = () => {
	const [currentValue, setCurrentValue] = useState<string>("0")

	const handleTap = (type: string, value: number | string): void => {
		setCurrentValue(currentState => {
			if (type === "number") {
				if (currentState === "0") {
					return `${value}`
				} else if (currentState.length <= 8) {
					return `${currentState}${value}`
				} else {
					return `${currentState}`
				}
			} else {
				return "0"
			}
		})
	}

	return (
		<Fragment>
			<CalculatorTotal total={currentValue} />
			<Row>
				<CalculatorButton
					text="AC"
					onPress={() => alert("TODO")}
					componentTheme="secondary"
				/>
				<CalculatorButton
					text="+/-"
					onPress={() => alert("TODO")}
					componentTheme="secondary"
				/>
				<CalculatorButton
					text="%"
					onPress={() => alert("TODO")}
					componentTheme="secondary"
				/>
				{/* Division */}
				<CalculatorButton
					text="&#247;"
					onPress={() => alert("TODO")}
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
				{/* Multiplication */}
				<CalculatorButton
					text="&#215;"
					onPress={() => alert("TODO")}
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
				{/* Subtraction */}
				<CalculatorButton
					text="&#8211;"
					onPress={() => alert("TODO")}
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
					onPress={() => alert("TODO")}
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
					onPress={() => alert("TODO")}
					componentTheme="accent"
				/>
			</Row>
		</Fragment>
	)
}

export default Calculator
