import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
//components
import Page from "../../containers/page/Page";
import Form from "../../containers/form/Form";
import FormFields from "./../../containers/form/FormFields";
import FormField from "./../../containers/form/FormField";
import FormActions from "./../../containers/form/FormActions";
import FormButton from "../../components/buttons/FormButton";
import InputText from "./../../components/inputs/InputText";
import InputCheckbox from "./../../components/inputs/InputCheckbox";

//state
import { loginUser } from "./../../features/auth/authSlice";
import Label from "./../../components/inputs/Label";

const Welcome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser(formData));
    if (result.payload.accessToken && result.payload.id) {
      navigate("/");
    }
  };
  return (
    <Page>
      <Form
        className="form-login"
        header="Welcome!"
        desc="Please enter your credentials"
        handleSubmit={onSubmit}
      >
        <FormFields>
          <FormField>
            <Label>username</Label>
            <InputText
              id="loginUsername"
              type="text"
              required={true}
              value={formData.username}
              handleChange={(e) => {
                setFormData({
                  ...formData,
                  username: e.target.value,
                });
              }}
            />
          </FormField>
          <FormField>
            <Label>password</Label>
            <InputText
              id="loginPassword"
              label="password"
              type={showPassword ? "text" : "password"}
              required={true}
              value={formData.password}
              handleChange={(e) => {
                setFormData({
                  ...formData,
                  password: e.target.value,
                });
              }}
            />
          </FormField>
        </FormFields>
        <FormActions>
          <FormField flow="row" justifyContent="end">
            <InputCheckbox
              id="showPassword"
              type="checkbox"
              flexDirection="rowRev"
              value={showPassword}
              handleChange={(e) => {
                setShowPassword(!showPassword);
              }}
            />
            <Label htmlFor="showPassword">Show Password</Label>
          </FormField>

          <FormButton>Login</FormButton>
        </FormActions>
      </Form>
    </Page>
  );
};

export default Welcome;
