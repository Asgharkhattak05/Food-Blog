import {
    Add,
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
  } from "@mui/icons-material";
  import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    TextField,
    Tooltip,
    Typography,
    styled,
  } from "@mui/material";
  import React, { useState } from "react";
  
  const ModalStyle = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  
  const BoxStyle = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });
  
  const Adds = () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Tooltip
          onClick={(e) => setOpen(true)}
          title="Add"
          sx={{
            position: "fixed",
            bottom: 10,
            width: 40,
            height: 40,
            left: { xs: 150, md: 100 },
          }}
        >
          <Fab color="primary" aria-label="add">
            <Add />
          </Fab>
        </Tooltip>
        <ModalStyle
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            borderRadius={2}
            padding={2}
            width={400}
            height={280}
            bgcolor={"background.default"} color={"text.primary"}
          >
            <Typography textAlign="center" variant="h6" color="gray">
              Create Post
            </Typography>
            <BoxStyle>
              <Avatar
                sx={{ width: 30, height: 30 }}
                alt="Remy Sharp"
                src="./src/image/avatar (1).jpg"
              />
              <Typography fontWeight={500} variant="span">
                Shez joi
              </Typography>
            </BoxStyle>
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={1}
              placeholder="What's on your mind?"
              variant="standard"
            />
  
            <Stack direction="row" gap={1} mt={2} mb={3}>
              <EmojiEmotions color="primary" />
              <Image color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAdd color="error" />
            </Stack>
            <ButtonGroup
            sx={{marginTop:"40px"}}
             fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button  >Post</Button>
              <Button sx={{maxWidth:"100px"}}>
                <DateRange />
              </Button>
            </ButtonGroup>
          </Box>
        </ModalStyle>
      </>
    );
  };
  
  export default Adds;
  