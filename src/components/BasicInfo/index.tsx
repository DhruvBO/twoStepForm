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
import { basicFormDefaultValue } from "../../constants/formDefaultValue";

const BasicInfoForm = () => {
  const dispatch = useDispatch();
  const persistedData = useAppSelector((state) => state.formData);
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { isDirty, isValid },
  } = useForm({
    defaultValues: basicFormDefaultValue,
    mode: "onChange",
  });

  
  const fillPersistedFormData = () => {
    setValue("fName", persistedData?.fName, {
      shouldTouch: true,
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("lName", persistedData?.lName, {
      shouldTouch: true,
      shouldDirty: true,
    });
    setValue("mName", persistedData?.mName, {
      shouldTouch: true,
      shouldDirty: true,
    });
    setValue("gender", persistedData?.gender, {
      shouldTouch: true,
      shouldDirty: true,
    });
    setValue("age", persistedData?.age, {
      shouldTouch: true,
      shouldDirty: true,
    });
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

  const onClickReset = () => {
    reset(
      {
        fName: "",
        lName: "",
        mName: "",
        gender: "",
      },
      {
        keepErrors: true,
        keepDirty: true,
        keepIsSubmitted: false,
        keepTouched: false,
        keepIsValid: false,
        keepSubmitCount: false,
      }
    );
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
      <Box component="p" sx={{ ...styles.inputField, color: "red" }}>
        Fill all the required* fields to proceed further.
      </Box>
      <Box sx={styles.form}>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Box sx={styles.inputWrapper}>
            <InputField
              customStyle={styles.inputField}
              control={control}
              name="fName"
              label="First Name*"
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
              label="Last Name*"
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
                label="Age*"
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
                label="Gender*"
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
            {/* <Box sx={styles.inputField}></Box> */}
            <Box sx={styles.inputField}>
              {/* <Button sx={styles.inputField} type="submit" variant="contained">
                Submit
              </Button> */}
              <Button
                sx={styles.inputField}
                variant="outlined"
                onClick={() => onClickReset()}
              >
                Reset
              </Button>
              {/* <Link href={pageLinks.professionalInfoSrc} passHref>
                  <Button
                    sx={styles.inputField}
                    variant="contained"
                    color="success"
                    disabled={}
                  >
                    Next
                  </Button>
                </Link> */}
              {isDirty && isValid ? (
                <Link href={pageLinks.professionalInfoSrc} passHref>
                  <Button
                    sx={styles.inputField}
                    variant="contained"
                    color="success"
                  >
                    Next
                  </Button>
                </Link>
              ) : (
                <Button
                  sx={styles.inputField}
                  variant="contained"
                  color="success"
                  disabled={true}
                >
                  Next
                </Button>
              )}
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
