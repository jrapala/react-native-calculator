import "styled-components/native"

declare module "styled-components" {
	export interface DefaultTheme {
		accentColor: string
		backgroundColor: string
		primaryColor: string
		secondaryColor: string
		textColorOnBackgroundColor: string
		textColorOnSecondaryColor: string
	}
}
