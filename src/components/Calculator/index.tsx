import React, { Fragment } from "react"

import Row from "../Row"
import CalculatorTotal from "../CalculatorTotal"
import CalculatorButton from "../CalculatorButton"
import useCalculator from "../../hooks/useCalculator"

const Calculator: React.FC = () => {
	const { currentValue, handleTap } = useCalculator()

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
