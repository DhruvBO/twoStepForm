import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../sections/form/InputField/Index";
import styles from "./styles";
import SelectField from "../../sections/form/SelectField";
import pageLinks from "../../constants/pageLinks";
import Link from "next/link";
import {
  ageError,
  genderError,
  nameError,
} from "../../constants/formErrorMessage";
import {
  firstName,
  age,
  lastName,
  middleName,
  gender,
} from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/store";

const BasicInfoForm = () => {
  const dispatch = useDispatch();
  const persistedData = useAppSelector((state) => state.formData);
  const { control, handleSubmit, watch, setValue } = useForm({
    mode: "onChange",
  });

  const fillPersistedFormData = () => {
    setValue("fName", persistedData?.fName);
    setValue("lName", persistedData?.lName);
    setValue("mName", persistedData?.mName);
    setValue("gender", persistedData?.gender);
    setValue("age", persistedData?.age);
  };

  useEffect(() => {
    if (Object.keys(persistedData).length !== 0) fillPersistedFormData();
  }, []);
  const watchItems = watch();
  useEffect(() => {
    if (Object.keys(watchItems).length !== 0) {
      dispatch(firstName(watchItems?.fName));
      dispatch(lastName(watchItems?.lName));
      dispatch(middleName(watchItems?.mName));
      dispatch(age(watchItems?.age));
      dispatch(gender(watchItems?.gender));
    }
  }, [watchItems]);

  const onCLickReset = () => {
    setValue("fName", "");
    setValue("lName", "");
    setValue("mName", "");
    setValue("gender", "");
    setValue("age", "");
  };
  const onSubmitForm = (formData: any) => {
    console.log(formData);
    alert(JSON.stringify(formData));
  };

  return (
    <Box sx={styles.wrapper}>
      <Box component="p" sx={styles.inputField}>
        Step: 1/2
      </Box>
      <Box component="h1" sx={styles.inputField}>
        Basic Info
      </Box>
      <Box sx={styles.form}>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Box sx={styles.inputWrapper}>
            <InputField
              customStyle={styles.inputField}
              control={control}
              name="fName"
              label="Name"
              type="text"
              rules={{
                required: {
                  value: true,
                  message: nameError.required,
                },
                minLength: {
                  value: nameError.minVal,
                  message: nameError.minLength,
                },
                maxLength: {
                  value: nameError.maxVal,
                  message: nameError.maxLength,
                },
              }}
            />
            <InputField
              customStyle={styles.inputField}
              control={control}
              name="mName"
              label="Middle Name"
              type="text"
              rules={{
                minLength: {
                  value: nameError.minVal,
                  message: nameError.minLength,
                },
                maxLength: {
                  value: nameError.maxVal,
                  message: nameError.maxLength,
                },
              }}
            />
            <InputField
              customStyle={styles.inputField}
              control={control}
              name="lName"
              label="Last Name"
              type="text"
              rules={{
                required: {
                  value: true,
                  message: nameError.required,
                },
                minLength: {
                  value: nameError.minVal,
                  message: nameError.minLength,
                },
                maxLength: {
                  value: nameError.maxVal,
                  message: nameError.maxLength,
                },
              }}
            />

            <Box>
              <InputField
                customStyle={styles.inputField}
                control={control}
                name="age"
                label="Age"
                type="number"
                rules={{
                  required: {
                    value: true,
                    message: ageError.required,
                  },
                  min: {
                    value: ageError.minVal,
                    message: ageError.min,
                  },
                  max: {
                    value: ageError.maxVal,
                    message: ageError.max,
                  },
                }}
              />
            </Box>
            <Box sx={styles.inputField}>
              <SelectField
                customStyle={styles.selectField}
                control={control}
                name="gender"
                label="Gender"
                menuOptions={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  {
                    value: "Female",
                    label: "Female",
                  },
                  {
                    value: "Other",
                    label: "Other",
                  },
                ]}
                rules={{
                  required: {
                    value: true,
                    message: genderError.required,
                  },
                }}
              />
            </Box>
            <Box sx={styles.inputField}></Box>
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
              <Link href={pageLinks.professionalInfoSrc} passHref>
                <Button
                  sx={styles.inputField}
                  variant="contained"
                  color="success"
                >
                  Next
                </Button>
              </Link>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default BasicInfoForm;
function useDispatcher() {
  throw new Error("Function not implemented.");
}
