import React from 'react'
import Grid from '@mui/material/Grid'

import VideoCard from 'components/VideoCard'

const Index = () => {
	return (
		<div>
			<Grid
				container
				spacing={3}
				sx={{
					width: '90%',
					margin: '0 auto',
				}}
			>
				{Array(40)
					.fill(0)
					.map((_, i) => (
						<Grid item xs={12} sm={6} md={4} lg={3} key={i}>
							<VideoCard />
						</Grid>
					))}
			</Grid>
		</div>
	)
}

export default Index
