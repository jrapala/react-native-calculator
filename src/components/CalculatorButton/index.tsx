import React from "react"
import { Dimensions, Text, TouchableOpacity } from "react-native"
import styled from "styled-components/native"

import normalize from "../../utils/normalize"

const screen = Dimensions.get("window")

interface Props {
	onPress: () => void
	text: string
}

const CalculatorButton: React.FC<Props> = ({ onPress, text }) => {
	return (
		<Button onPress={onPress}>
			<ButtonText>{text}</ButtonText>
		</Button>
	)
}

const columnWidth = screen.width / 4

const Button = styled(TouchableOpacity)`
	align-items: center;
	background-color: ${(props): string => props.theme.secondaryColor};
	border-radius: ${Math.floor(columnWidth) + "px"};
	flex: 1;
	height: ${Math.floor(columnWidth - 10) + "px"};
	justify-content: center;
	margin: 5px;
`

const ButtonText = styled(Text)`
	color: #fff;
	font-size: ${normalize(20) + "px"};
`

export default CalculatorButton
