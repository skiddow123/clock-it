import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import './NavbarComponent.css'
import { useNavigate } from 'react-router-dom'

export default function NavbarComponent() {
  const navigate = useNavigate()

  const navigateToRouteHandler = (route) => {
    navigate(route)
  }

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' color='inherit' edge='start' aria-label='logo'>
            <CatchingPokemonIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{flexGrow: 1}}>MPS-CHECKLIST</Typography>
          <Stack direction='row' spacing={2}>
          <Button color='inherit' onClick={() => navigateToRouteHandler("checklist")}>Checklist</Button>
          <Button color='inherit' onClick={() => navigateToRouteHandler("download")}>Download Report</Button>
            {/* <Button color='inherit' onClick={() => navigateToRouteHandler("precheck")}>CHECK IN</Button> */}
            {/* <Button color='inherit' onClick={() => navigateToRouteHandler("postcheck")}>CHECK OUT</Button> */}
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}