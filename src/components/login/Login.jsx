import React, { useState } from "react";
import validateLogIn from "../../hooks/validateLogIn";

import {
  VStack,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  FormErrorMessage,
} from "@chakra-ui/react";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { username: user, password: pass };
    const { error, success } = validateLogIn(data);
    if (error) {
      setErr(error);
    }
    setUser("");
    setPass("");
  };

  return (
    <VStack
      as="form"
      onSubmit={(e) => handleSubmit(e)}
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify="center"
      h="100vh"
      spacing="1rem"
    >
      <Heading>Log In</Heading>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          value={user}
          placeholder="Enter Username"
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      </FormControl>

      <FormControl isInvalid={err}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={pass}
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <FormErrorMessage>{err}</FormErrorMessage>
      </FormControl>

      <ButtonGroup pt="1rem">
        <Button colorScheme="teal" type="submit">
          Log In
        </Button>
        <Button>Create Account</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Login;
