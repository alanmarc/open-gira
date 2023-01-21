import { useContext } from 'react';

import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { UIContext } from '../../context/ui';


export const NavBar  = () => {

  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position="sticky" elevation={ 0 }>
        <Toolbar>
            <IconButton 
            size="large"
            edge="start"
            onClick={ openSideMenu}
            >
                <MenuOpenOutlinedIcon/>
            </IconButton>

            <Typography variant="h6">OpenJira</Typography>
        </Toolbar>
    </AppBar>
  )
}
