import Typorgraphy from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {
	createStyled,
	createTheme,
	styled,
	ThemeProvider,
	useTheme,
} from '@mui/system'
import useMediaQuery from '@mui/material/useMediaQuery'

const theme = createTheme({
	palette: {
		primary: {
			main: '#f44336',
		},
	},
})

const RedBox = ({ children }) => {
	return <Box sx={{ background: 'red' }}>{children}</Box>
}

const Cont = styled('div')((props) => {
	console.log(props)
	return {
		background: 'red',
		color: 'white',
		padding: '1rem',
		margin: '1rem',
	}
})

const BreakPoint = () => {
	const theme = useTheme()
	const smallerThanMD = useMediaQuery(theme.breakpoints.down('md'))
	const largerThanlg = useMediaQuery(theme.breakpoints.up('lg'))
	const smallerThansm = useMediaQuery('(max-width: 600px)')
	return (
		<Box
			sx={{
				background: {
					xs: 'red',
					md: 'blue',
				},
			}}
		>
			{smallerThanMD && <Typorgraphy>This is smaller than MD</Typorgraphy>}
			{largerThanlg && <Typorgraphy>This is larger than LG</Typorgraphy>}
			{smallerThansm && (
				<Typorgraphy varinat='h3'>This is smaller than SM</Typorgraphy>
			)}
			<Typorgraphy varinat='h3'>This is smaller than SM</Typorgraphy>
		</Box>
	)
}

const typography = () => {
	return (
		<ThemeProvider theme={theme}>
			<BreakPoint />
		</ThemeProvider>
	)
}

export default typography
