import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { ListItemButton, ListItemIcon } from '@mui/material';
import './sidebar.css'
let sidebarLinks = [
    {name: 'Home', link: '/',
        icon: <HomeIcon color='primary'/>
    },
    {name: 'Profile', link: '/',icon: <AccountBoxIcon color='primary'/>},
    {name: 'File ITR', link: '/',icon: <ContentPasteGoIcon color='primary'/>},
    {name: 'Raise a Complaint', link: '/',icon: <QuestionAnswerIcon color='primary'/>},
]


function Sidebar() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    let handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    }
  return (
    <div className="sidebar">
      <List>
        {sidebarLinks.map((link, index) => (
          <ListItemButton selected={selectedIndex === index} onClick={(event) => handleListItemClick(event, index)}
          divider={true} sx={{fontSize: '24px',color:'#1976d2'}} >
            <ListItemIcon>{link.icon}</ListItemIcon> {link.name}</ListItemButton>
        ))}      
        
      </List>
    </div>
  )
}

export default Sidebar
