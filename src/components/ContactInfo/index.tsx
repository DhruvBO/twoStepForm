import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../sections/form/InputField/Index";
import styles from "./styles";
import TextArea from "../../sections/form/TextArea";
import pageLinks from "../../constants/pageLinks";
import Link from "next/link";
import {
  emailError,
  phoneNoError,
  textArea,
} from "../../constants/formErrorMessage";
import { phoneNumber, address, emailAddress } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/store";
const ContactInfo = () => {
  const dispatch = useDispatch();
  const persistedData = useAppSelector((state) => state.formData);
  const { control, handleSubmit, watch, setValue } = useForm({
    mode: "onChange",
  });

  const fillPersistedFormData = () => {
    setValue("email", persistedData?.email);
    setValue("address", persistedData?.address);
    setValue("pNo", persistedData?.pNo);
  };

  useEffect(() => {
    if (Object.keys(persistedData).length !== 0) fillPersistedFormData();
  }, []);

  const watchItems = watch();
  useEffect(() => {
    if (Object.keys(watchItems).length !== 0) {
      dispatch(address(watchItems?.address));
      dispatch(emailAddress(watchItems?.email));
      dispatch(phoneNumber(watchItems?.pNo));
    }
  }, [watchItems]);

  const onCLickReset = () => {
    setValue("email", "");
    setValue("address", "");
    setValue("pNo", "");
  };
  const onSubmitForm = () => {
    alert(JSON.stringify(persistedData));
  };

  return (
    <Box sx={styles.wrapper}>
      <Box component="p" sx={styles.inputField}>
        Step: 2/2
      </Box>
      <Box component="h1" sx={styles.inputField}>
        Contact Info
      </Box>
      <Box sx={styles.form}>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Box sx={styles.inputWrapper}>
            <Box sx={styles.inputField}>
              <InputField
                customStyle={{ ...styles.inputEmail }}
                control={control}
                name="email"
                label="Email"
                type="email"
                rules={{
                  required: {
                    value: true,
                    message: emailError.required,
                  },
                  pattern: {
                    value: emailError.pattern,
                    message: emailError.message,
                  },
                }}
              />
            </Box>

            <Box>
              <InputField
                customStyle={styles.inputField}
                control={control}
                name="pNo"
                label="Phone Number"
                type="number"
                rules={{
                  required: {
                    value: true,
                    message: phoneNoError.required,
                  },
                  min: {
                    value: phoneNoError.minVal,
                    message: phoneNoError.min,
                  },
                  max: {
                    value: phoneNoError.maxVal,
                    message: phoneNoError.max,
                  },
                }}
              />
            </Box>

            <Box sx={styles.inputField}>
              <TextArea
                customStyle={styles.textArea}
                control={control}
                multiline={true}
                name="address"
                label="Full Address"
                type="text"
                minRows={10}
                rules={{
                  required: {
                    value: true,
                    message: textArea.required,
                  },
                  minLength: {
                    value: textArea.minVal,
                    message: textArea.min,
                  },
                  maxLength: {
                    value: textArea.maxVal,
                    message: textArea.max,
                  },
                }}
              />
            </Box>
            <Box sx={styles.inputField}>
              <Button sx={styles.inputField} type="submit" variant="contained">
                Submit
              </Button>
              <Button
                sx={styles.inputField}
                variant="outlined"
                onClick={() => onCLickReset()}
              >
                Reset
              </Button>
              <Link href={pageLinks.basicInfoSrc} passHref>
                <Button
                  sx={styles.inputField}
                  variant="contained"
                  color="success"
                >
                  Previous
                </Button>
              </Link>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ContactInfo;
