import { useState, useMemo } from 'react'
import Paper from '@mui/material/Paper'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import AppBar from 'components/AppBar'

const Layout = ({ children }) => {
	const [darkMode, setDarkMode] = useState(true)

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: darkMode ? 'dark' : 'light',
				},
			}),
		[darkMode]
	)

	const toggleDarkMode = () => setDarkMode(!darkMode)

	const appBarProps = { darkMode, toggleDarkMode }

	return (
		<ThemeProvider theme={theme}>
			<AppBar {...appBarProps} />

			<Paper
				sx={{
					minHeight: '100vh',
					paddingTop: {
						xs: '56px',
						sm: '64px',
					},
				}}
			>
				{children}
			</Paper>
		</ThemeProvider>
	)
}

export default Layout
