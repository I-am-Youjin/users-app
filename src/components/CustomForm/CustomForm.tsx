import React from "react";
import { FilledInput, InputAdornment, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { InputsContainer, StyledFormContainer } from "./styles";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";
import { FirebaseSignUp } from "../../firebase/auth_signup_password";

interface IForm {
  type: string;
}

const CustomForm: React.FC<IForm> = ({ type }) => {
  const initiallState = {
    username: "",
    email: "",
    password: "",
    repeatPass: "",
  };

  const formType = type === "signin";
  const { enqueueSnackbar } = useSnackbar();

  const [showPassword, setShowPassword] = React.useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = React.useState(false);
  const [formState, setFormState] = React.useState(initiallState);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowRepeatPassword = () =>
    setShowRepeatPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof typeof initiallState
  ) => {
    setFormState(
      (prevData: {
        username: string;
        email: string;
        password: string;
        repeatPass: string;
      }) => {
        return { ...prevData, [fieldName]: event.target.value };
      }
    );
  };

  const handleSignUp = () => {
    if (formState.username && formState.email && formState.password) {
      switch (true) {
        case !formState.email.includes("@"):
          enqueueSnackbar('Your email must includes "@"', { variant: "error" });
          break;
        case formState.password != formState.repeatPass:
          enqueueSnackbar("Passwords mismatch", { variant: "error" });
          break;
        default:
          FirebaseSignUp(
            formState.email,
            formState.password,
            formState.username
          );
      }
    } else {
      enqueueSnackbar("You have empty inputs", { variant: "error" });
    }
  };

  const handleSignIn = () => {
    if (formState.email && formState.password) {
      console.log(formState);
    } else {
      enqueueSnackbar("You have empty inputs", { variant: "error" });
    }
  };

  return (
    <StyledFormContainer>
      <InputsContainer>
        {formType ? null : (
          <TextField
            size="small"
            label="Username"
            variant="filled"
            value={formState.username}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeValue(event, "username")
            }
          ></TextField>
        )}
        <TextField
          size="small"
          label="Email"
          variant="filled"
          value={formState.email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeValue(event, "email")
          }
        ></TextField>
        <FormControl variant="filled">
          <InputLabel htmlFor="filled-password-input-1">Password</InputLabel>
          <FilledInput
            id="filled-password-input-1"
            size="small"
            type={showPassword ? "text" : "password"}
            value={formState.password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeValue(event, "password")
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {" "}
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {formType ? null : (
          <FormControl variant="filled">
            <InputLabel htmlFor="filled-password-input-2">
              Repeat password
            </InputLabel>
            <FilledInput
              id="filled-password-input-2"
              size="small"
              type={showRepeatPassword ? "text" : "password"}
              value={formState.repeatPass}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeValue(event, "repeatPass")
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowRepeatPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {" "}
                    {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        )}
        <Button
          variant="contained"
          sx={{ height: 48, backgroundColor: "#a2a6a3" }}
          onClick={formType ? handleSignIn : handleSignUp}
        >
          {formType ? "Sign in" : "Sign up"}
        </Button>
      </InputsContainer>
    </StyledFormContainer>
  );
};

export default CustomForm;
