import { Box, Button, Link } from "@mui/material";
import React from "react";
import styles from "./styles";
const Header = () => {
  return (
    <Box>
      <Box sx={styles.header}>
        <Box sx={styles.heading} component="h1">Two Step Form</Box>
      </Box>
      {/* <Box sx={styles.Form}>
        <Box sx={styles.formBtnWrapper}>
          <Button sx={styles.formBtn}>Basic Info</Button>
        </Box>
        <Box sx={styles.formBtnWrapper}>
          <Button sx={styles.formBtn}>Professional Info</Button>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Header;
