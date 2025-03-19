import { useState } from "react";
import Page from "../../containers/page/Page";
import Form from "../../containers/form/Form";
import FormFields from "./../../containers/form/FormFields";
import FormActions from "./../../containers/form/FormActions";
import FormButton from "../../components/buttons/FormButton";
import FormInput from "./../../components/inputs/FormInput";

const Welcome = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Page>
      <Form
        header="Welcome!"
        desc="Please enter your credentials"
        handleSubmit={onSubmit}
      >
        <FormFields>
          <FormInput
            id="loginUsername"
            label="username"
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
          <FormInput
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
        </FormFields>
        <FormActions>
          <FormInput
            id="showPassword"
            label="Show password"
            type="checkbox"
            flexDirection="rowRev"
            value={showPassword}
            handleChange={(e) => {
              setShowPassword(!showPassword);
            }}
          />
          <FormButton>Login</FormButton>
        </FormActions>
      </Form>
    </Page>
  );
};

export default Welcome;
