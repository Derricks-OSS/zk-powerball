import React from "react";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import CasinoIcon from '@mui/icons-material/Casino';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import Chip from "@mui/material/Chip";
import { useAccount, useBalance, useDisconnect } from 'wagmi'

const Layout = (properties: any) => {
  const { children } = properties;
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const { data, isError, isLoading } = useBalance({
    address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  })
  console.log(data);
  const { address, isConnected } = useAccount()
  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log('Connected', { address, connector, isReconnected })
    },
  })
  const { disconnect } = useDisconnect()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const wallet = false; // TODO: remove after adding state hook
  const walletBalance = 5.3433;
  return (
    <>
      <AppBar position="static">
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <CasinoIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              ZK Powerball
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">One</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <CasinoIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              ZK Powerball
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href="/about"
              >
                About
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href="/powerball"
              >
                Powerball
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href="/scratch-offs"
              >
                Scratch-offs
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href="/faqs"
              >
                faqs
              </Button>
            </Box>
            {isConnected
              ? <>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Chip
                        avatar={<Avatar alt="Natachcjfa" src="" />}
                        label={`${data?.formatted}` + ` ${data?.symbol}`}
                        style={{ backgroundColor: "white" }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px', textShadow: "none" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{address}</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Account</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">My Tickets</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => {disconnect(); console.log("connected: ", isConnected)}}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              </>
              :
              <>
                <div></div>
              </>
            }
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </>
  );
}

export default Layout;