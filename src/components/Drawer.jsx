import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'

import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'

const Drawer = ({ open, toggleDrawer }) => {
	return (
		<SwipeableDrawer
			anchor='left'
			open={open}
			onClose={toggleDrawer}
			onOpen={toggleDrawer}
			sx={{
				'& .MuiDrawer-paper': {
					width: '80%',
					maxWidth: '20rem',
				},
			}}
		>
			<List sx={{ width: '100%' }} component='nav'>
				<ListItemButton>
					<ListItemIcon>
						<SendIcon />
					</ListItemIcon>
					<ListItemText primary='Sent mail' />
				</ListItemButton>
				<ListItemButton>
					<ListItemIcon>
						<DraftsIcon />
					</ListItemIcon>
					<ListItemText primary='Drafts' />
				</ListItemButton>
				<ListItemButton>
					<ListItemIcon>
						<InboxIcon />
					</ListItemIcon>
					<ListItemText primary='Inbox' />
				</ListItemButton>
			</List>
		</SwipeableDrawer>
	)
}

export default Drawer
