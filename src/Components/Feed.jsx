import { Box, Skeleton, Stack } from "@mui/material";
import React, { useState } from "react";
import baryani from "../image/baryani.jpg"
import pealla from "../image/pealla.jpg"
import mewapelao from "../image/pelao.jpg"

import Posts from "./Posts";

const Feed = () => {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [1000]);

  return (
    <Box flex={4}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ):(
        <>
      <Posts title="Shrimp and Chorizo Paella"  image={pealla} des="Paella is a rice dish originally from the Valencian Community. Paella is regarded as one of the community's identifying symbols. It is one of the best-known dishes in Spanish cuisine" />

      <Posts title="Ghusi Baryani" image={baryani} des="Biryani is a mixed rice dish that is thought to have originated from Iran or South India. It is made with rice, some type of meat and spices. To cater to vegetarians, in some cases, it is prepared by substituting vegetables for the meat." />
      <Posts title="Aloo gosht" image={baryani} des="Aloo gosht is a meat curry, and is a popular dish in North Indian, Pakistani, and Bangladeshi cuisine. It consists of potatoes cooked with meat, usually lamb or mutton or beef, in a stew-like shorba gravy." />
      <Posts title="Mewa Pelao" image={mewapelao} des="Jaipuri Mewa Pulao is one of the yummiest main dishes which might take time in cooking but can be cooked easily with simple kitchen friendly" />
      <Posts title="Ghusi Baryani" image={baryani} des="Biryani is a mixed rice dish that is thought to have originated from Iran or South India. It is made with rice, some type of meat and spices. To cater to vegetarians, in some cases, it is prepared by substituting vegetables for the meat." />
      </>
      )}
    </Box>
  );
};

export default Feed;
