'use client'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import { database } from "@/db/database";

import Link from 'next/link';

import "@/app/global.css";



export default function DrawerLeft() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box 
      sx={{ width: 300 }} 
      role="presentation" 
      onClick={toggleDrawer(false)}
    >
      <List className='' >
        {database.map((part, index) => (
          <Link
            key={part.id}
            href={`/checklist/${part.name}-01`} 
          >
            <ListItem 
              key={part.name} 
              disablePadding 
              className='text-teal-700'
            >
              <ListItemButton>
                <ListItemIcon className='text-teal-800'>
                  <RadioButtonUncheckedOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={part.name}/>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Box>
  );


  return (
    <div className='flex items-center justify-center'>
      <Button 
        onClick={toggleDrawer(true)} 
        className='group hover:bg-teal-100' 
      >
        <MenuRoundedIcon 
          className='group-hover:text-teal-900 text-teal-700'
          fontSize='large'
        />
      </Button>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}


{
  /*
  <Link key={part.id} }>
    {part.name}
  </Link> 
*/}