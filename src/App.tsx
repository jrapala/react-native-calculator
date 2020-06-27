import React, { useState } from "react"
import { SafeAreaView, StatusBar } from "react-native"
import styled, { ThemeProvider } from "styled-components/native"

import { iOSDarkTheme } from "./styles"
import Calculator from "./components/Calculator"

const App: React.FC = () => {
	const [theme] = useState(iOSDarkTheme)

	return (
		<ThemeProvider theme={theme}>
			<StatusBar barStyle="light-content" />
			<StyledSafeAreaView>
				<Calculator />
			</StyledSafeAreaView>
		</ThemeProvider>
	)
}

const StyledSafeAreaView = styled(SafeAreaView)`
	background-color: ${(props): string => props.theme.primaryColor};
	flex: 1;
	justify-content: flex-end;
`

export default App
