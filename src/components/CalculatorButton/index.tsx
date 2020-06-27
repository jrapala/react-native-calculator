import React from "react"
import { Dimensions, Text, TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native"
import { FlattenSimpleInterpolation } from "styled-components"
import normalize from "../../utils/normalize"

const screen = Dimensions.get("window")

interface Props {
	componentTheme?: string
	onPress: () => void
	size?: string
	text: string
}

interface ButtonProps {
	componentTheme?: string
	size?: string
}

const CalculatorButton: React.FC<Props> = ({
	componentTheme,
	onPress,
	size,
	text,
}) => {
	return (
		<Button componentTheme={componentTheme} size={size} onPress={onPress}>
			<ButtonText componentTheme={componentTheme}>{text}</ButtonText>
		</Button>
	)
}

const columnWidth = screen.width / 4

const Button = styled(TouchableOpacity)<ButtonProps>`
	align-items: center;
	background-color: ${(props): string =>
		props.componentTheme === "secondary"
			? props.theme.secondaryColor
			: props.componentTheme === "accent"
			? props.theme.accentColor
			: props.theme.primaryColor};
	border-radius: ${Math.floor(columnWidth) + "px"};
	flex: 1;
	height: ${Math.floor(columnWidth - 10) + "px"};
	justify-content: center;
	margin: 5px;

	${(props): false | FlattenSimpleInterpolation =>
		props.size === "double" &&
		css`
			align-items: flex-start;
			flex: 2;
			max-width: ${screen.width / 2 - 10 + "px"};
			padding-left: 10%;
		`}
`

const ButtonText = styled(Text)<ButtonProps>`
	color: ${(props): string =>
		props.componentTheme === "secondary"
			? props.theme.textColorOnSecondaryColor
			: props.theme.textColorOnBackgroundColor};
	font-size: ${normalize(30) + "px"};
	font-weight: 500;
`

export default CalculatorButton
