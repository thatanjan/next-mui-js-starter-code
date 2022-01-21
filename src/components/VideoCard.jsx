import React from 'react'
import Image from 'next/image'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import MuiLink from 'components/MuiLink'

const VideoCard = () => {
	return (
		<>
			<Card>
				<MuiLink MuiComponent={CardMedia} href='/'>
					<Image
						src='/gaming_1.jpg'
						height={9}
						width={16}
						layout='responsive'
						objectFit='cover'
					/>
				</MuiLink>

				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
							R
						</Avatar>
					}
					action={
						<IconButton aria-label='settings'>
							<MoreVertIcon />
						</IconButton>
					}
					title='Qt ducimus recusandae iste in blanditiis Sint harum deleniti!'
					subheader={
						<>
							<Typography>dfslkjfaosdosjefj</Typography>

							<Typography variant='caption' color='textSecondary'>
								Jan 9, 2020
							</Typography>
						</>
					}
				/>
			</Card>
		</>
	)
}

export default VideoCard
