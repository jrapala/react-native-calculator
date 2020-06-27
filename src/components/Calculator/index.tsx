import React, { Fragment } from "react"
import { Text } from "react-native"
import styled from "styled-components/native"

import Row from "../Row"
import CalculatorButton from "../CalculatorButton"
import normalize from "../../utils/normalize"

const Calculator: React.FC = () => {
	return (
		<Fragment>
			<CalculatorTotal>75</CalculatorTotal>
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
				<CalculatorButton text="7" onPress={() => alert("TODO")} />
				<CalculatorButton text="8" onPress={() => alert("TODO")} />
				<CalculatorButton text="9" onPress={() => alert("TODO")} />
				{/* Multiplication */}
				<CalculatorButton
					text="&#215;"
					onPress={() => alert("TODO")}
					componentTheme="accent"
				/>
			</Row>
			<Row>
				<CalculatorButton text="4" onPress={() => alert("TODO")} />
				<CalculatorButton text="5" onPress={() => alert("TODO")} />
				<CalculatorButton text="6" onPress={() => alert("TODO")} />
				{/* Subtraction */}
				<CalculatorButton
					text="&#8211;"
					onPress={() => alert("TODO")}
					componentTheme="accent"
				/>
			</Row>
			<Row>
				<CalculatorButton text="1" onPress={() => alert("TODO")} />
				<CalculatorButton text="2" onPress={() => alert("TODO")} />
				<CalculatorButton text="3" onPress={() => alert("TODO")} />
				<CalculatorButton
					text="+"
					onPress={() => alert("TODO")}
					componentTheme="accent"
				/>
			</Row>
			<Row>
				<CalculatorButton
					text="0"
					onPress={() => alert("TODO")}
					size="double"
				/>
				<CalculatorButton text="." onPress={() => alert("TODO")} />
				<CalculatorButton
					text="="
					onPress={() => alert("TODO")}
					componentTheme="accent"
				/>
			</Row>
		</Fragment>
	)
}

const CalculatorTotal = styled(Text)`
	color: ${(props): string => props.theme.textColorOnBackgroundColor};
	font-size: ${normalize(30) + "px"};
	margin-right: 5%;
	text-align: right;
`

export default Calculator
