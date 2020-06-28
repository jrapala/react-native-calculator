import React from "react"
import { Text } from "react-native"
import styled from "styled-components/native"

import normalize from "../../utils/normalize"

interface Props {
	total: string
}

interface TextProps {
	size: number
}

const CalculatorTotal: React.FC<Props> = ({ total }) => {
	let size
	switch (total.length) {
		case 7:
			size = 65
			break
		case 8:
			size = 55
			break
		case 9:
			size = 50
			break
		case 10:
			size = 45
			break
		default:
			size = 70
	}

	return <Total size={size}>{parseFloat(total).toLocaleString()}</Total>
}

const Total = styled(Text)<TextProps>`
	color: ${(props): string => props.theme.textColorOnBackgroundColor};
	font-size: ${(props): string => normalize(props.size) + "px"};
	font-weight: 300;
	margin-bottom: 2%;
	margin-right: 5%;
	text-align: right;
`

export default CalculatorTotal
