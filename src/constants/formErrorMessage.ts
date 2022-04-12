const nameError = {
  required: "This field is required.",
  minLength: "Atleast 3 character required.",
  minVal: 3,
  maxLength: "Maximum 20 character is allowed.",
  maxVal: 20,
};
const emailError = {
  required: "This field is required.",
  pattern:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: "Please enter valid email address.",
};

const ageError = {
  required: "This field is required.",
  min: "You are not eligible.",
  max: "You are not eligible",
  minVal: 18,
  maxVal: 100,
};

const phoneNoError = {
  required: "This field is required.",
  min: "You are not eligible.",
  max: "You are not eligible",
  minVal: 1000000000,
  maxVal: 9999999999,
};

const genderError = {
  required: "This field is required.",
};

const textArea = {
  required: "This field is required.",
  min: "Atleast 20 character required",
  max: "Maximum 200 character is allowed.",
  minVal: 10,
  maxVal: 200,
}

export { nameError, emailError, ageError, phoneNoError, genderError, textArea };
