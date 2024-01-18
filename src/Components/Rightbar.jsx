import React, { useState, useEffect } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import avatar1 from "../image/avatar (1).jpg";
import avatar2 from "../image/avatar (2).jpg";
import avatar3 from "../image/avatar (3).jpg";
import avatar4 from "../image/avatar (4).jpg";
import avatar5 from "../image/avatar (5).jpg";
import avatar6 from "../image/avatar (6).jpg";
import avatar7 from "../image/avatar (7).jpg";
import avatar8 from "../image/avatar (8).jpg";
import RImg1 from "../image/1 (1).jpg";
import RImg2 from "../image/1 (6).jpg";
import RImg3 from "../image/1 (3).jpg";
import RImg4 from "../image/1 (9).jpg";
import cardHeadImg from "../image/avatar (1).jpg"
import cardHeadImg2 from "../image/avatar (2).jpg"
import cardHeadImg3 from "../image/avatar (3).jpg"





const Rightbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 1000;
      const contentHeight =
        document.getElementById("rightbarContent")?.clientHeight || 0;
      const scrollY = window.scrollY || window.screenY;

      setIsFixed(scrollY > threshold && contentHeight > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box
        width={270}
        sx={{ position: isFixed ? "fixed" : "static" }}
        id="rightbarContent"
      >
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src={avatar1} />
          <Avatar alt="Remy Sharp" src={avatar2} />
          <Avatar alt="Remy Sharp" src={avatar3} />
          <Avatar alt="Remy Sharp" src={avatar4} />
          <Avatar alt="Travis Howard" src={avatar5} />
          <Avatar alt="Cindy Baker" src={avatar6} />
          <Avatar alt="Agnes Walker" src={avatar7} />
          <Avatar alt="Trevor Henderson" src={avatar8} />
          <Avatar alt="Cindy Baker" src={avatar1} />
        </AvatarGroup>

        <Typography variant="h6" sx={{ paddingTop: "20px" }} fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList variant="masonry" cols={3} gap={8}>
          <ImageListItem>
            <img
              srcSet={`${RImg1}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${RImg1}?w=248&fit=crop&auto=format`}
            />
            <ImageListItemBar position="below"  />
          </ImageListItem>
          <ImageListItem>
            <img
              srcSet={`${RImg2}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${RImg2}?w=248&fit=crop&auto=format`}
            />
            <ImageListItemBar position="below"  />
          </ImageListItem>
          <ImageListItem>
            <img
              srcSet={`${RImg3}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${RImg3}?w=248&fit=crop&auto=format`}
            />
            <ImageListItemBar position="below"  />
          </ImageListItem>
          <ImageListItem>
            <img
              srcSet={`${RImg4}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${RImg4}?w=248&fit=crop&auto=format`}
            />
            <ImageListItemBar position="below"  />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100}>
          Latest Conversation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={cardHeadImg} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
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
              <Avatar alt="Travis Howard" src={cardHeadImg2} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
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
              <Avatar alt="Cindy Baker" src={cardHeadImg3} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
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
