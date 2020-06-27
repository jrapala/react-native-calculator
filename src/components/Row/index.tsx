import React from "react"
import { View } from "react-native"
import styled from "styled-components/native"

const Row: React.FC = ({ children }) => <StyledView>{children}</StyledView>

const StyledView = styled(View)`
	flex-direction: row;
`

export default Row
