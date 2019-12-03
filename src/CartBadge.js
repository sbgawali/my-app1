import React from 'react';
import {Box,Badge,IconButton} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
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