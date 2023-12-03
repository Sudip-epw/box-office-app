import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  fontFamily: 'Roboto, sans-serif',
  mainColors: {
    blue: '#ff0000',
    gray: '#a8a8a8',
    dark: '#222222',
  },
};

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 18px;
    margin: 0;
    padding-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const GlobalTheme = ( { children } ) => {

    return <ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
			</ThemeProvider>
}