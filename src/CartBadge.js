import React from 'react';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge1 = withStyles(theme => ({
  badge: {
    right: -3,
    border: `2px solid white`,
    padding: '0 4px',
  },
}))(Badge);


export default function CartBadge(props) {    
  return (
    <Box display="flex">
      <Box m={1}>
        <IconButton aria-label="cart">
          <StyledBadge1 badgeContent={(props.cartCount || 0)} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge1>
        </IconButton>
      </Box>
    </Box>
  );
}