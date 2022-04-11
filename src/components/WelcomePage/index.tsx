import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./styles";
import pageLinks from "../../constants/pageLinks";
import Link from "next/link";

const WelcomePage = () => {
  return (
    <Box sx={styles.content}>
      <Link href={pageLinks.basicInfoSrc} passHref>
        <Button sx={styles.startBtn} variant="contained">
          Get Started
        </Button>
      </Link>
    </Box>
  );
};

export default WelcomePage;
