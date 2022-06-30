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
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [usrErr, setUsrErr] = useState();
  const [passErr, setPassErr] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { username: user, password: pass };
    console.log(data);
    const { error, message, success } = validateLogIn(data);
    if (error === "blank") {
      setUsrErr(message);
      setPassErr(message);
    }
    if (error === "username") {
      console.log(message);
      setUsrErr(message);
      console.log(usrErr);
    }
    if (error === "password") {
      console.log(message);
      setPassErr(message);
    }
    if (success) {
      setUsrErr();
      setPassErr();
      console.log(message);
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
      <FormControl isInvalid={usrErr}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          value={user}
          placeholder="Enter Username"
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setUsrErr();
            setPassErr();
            setUser(e.target.value);
          }}
        />
        <FormErrorMessage>{usrErr}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={passErr}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={pass}
          autoComplete="off"
          size="lg"
          onChange={(e) => {
            setUsrErr();
            setPassErr();
            setPass(e.target.value);
          }}
        />
        <FormErrorMessage>{passErr}</FormErrorMessage>
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
