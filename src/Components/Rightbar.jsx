import React, { useState, useEffect } from 'react';
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, ImageListItemBar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import itemData from './ItemData';

const Rightbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 1000;
      const contentHeight = document.getElementById('rightbarContent')?.clientHeight || 0;
      const scrollY = window.scrollY || window.screenY;

      setIsFixed(scrollY > threshold && contentHeight > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box width={270} sx={{ position: isFixed ? 'fixed' : 'static' }} id="rightbarContent">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="./src/image/avatar (1).jpg" />
          <Avatar alt="Remy Sharp" src="./src/image/avatar (2).jpg" />
          <Avatar alt="Remy Sharp" src="./src/image/avatar (3).jpg" />
          <Avatar alt="Remy Sharp" src="./src/image/avatar (4).jpg" />
          <Avatar alt="Travis Howard" src="./src/image/avatar (5).jpg" />
          <Avatar alt="Cindy Baker" src="./src/image/avatar (6).jpg" />
          <Avatar alt="Agnes Walker" src="./src/image/avatar (7).jpg" />
          <Avatar alt="Trevor Henderson" src="./src/image/avatar (8).jpg" />
          <Avatar alt="Cindy Baker" src="./src/image/avatar (6).jpg" />
        </AvatarGroup>

        <Typography variant="h6" sx={{ paddingTop: "20px" }} fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.author}
              />
              <ImageListItemBar position="below" title={item.author} />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography variant="h6" fontWeight={100}>
          Latest Conversation
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
