import React from "react";
import { Form, Formik } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
  Button,
} from "@chakra-ui/core";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useMutation } from "urql";

interface registerProps {}

const REGISTER_MUT = `
mutation Register($username: String!, $password: String!) {
  register(options: { username: $username, password: $password }) {
    errors {
      field
      message
    }
    user {
      username
    }
  }
}
`;

export const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useMutation(REGISTER_MUT);
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={async (values) => {
        const response = await register(values);
      }}
    >
      {({ isSubmitting }) => (
        <Wrapper variant="small">
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="username"
            />
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="password"
                type="password"
              />
            </Box>
            <Button
              mt={4}
              isLoading={isSubmitting}
              type="submit"
              colorScheme="teal"
            >
              register
            </Button>
          </Form>
        </Wrapper>
      )}
    </Formik>
  );
};

export default Register;
