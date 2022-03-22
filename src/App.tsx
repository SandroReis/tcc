import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  CheckboxGroup,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { MyDropzone } from "./dropzone";
import { AttachmentIcon } from "@chakra-ui/icons";
import axios from "axios";
import theme from "./theme";

export const App = () => {
  const [filesToSend, setFilesToSend] = useState<any[]>([]);

  return (
    <ChakraProvider theme={theme}>
      <Box margin="auto" maxWidth="800">
        <CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
          <Stack spacing={[1, 5]} direction={["column", "row"]}>
            <Checkbox value="naruto">Naruto</Checkbox>
            <Checkbox value="sasuke">Sasuke</Checkbox>
            <Checkbox value="kakashi">kakashi</Checkbox>
          </Stack>
        </CheckboxGroup>
        <Box mt="12">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            temporibus ab placeat reprehenderit culpa labore dignissimos quam.
            Dolorem, laborum. Placeat id labore aperiam repellendus at
            aspernatur, quaerat ut? Dolorum dolores tempore delectus eum id
            animi, incidunt modi praesentium, ab, rerum nemo ex laboriosam
            placeat eveniet fugit maxime perferendis odit non.
          </Text>
          <MyDropzone setFilesToSend={setFilesToSend} />
          <Button
            mb="12"
            onClick={async () => {
              const api = await axios.post(
                "https://6v931cyez7.execute-api.us-east-1.amazonaws.com/",
                filesToSend
              );
              console.log("api", api.data);
              console.log("filesToSend", filesToSend);
            }}
          >
            Enviar
          </Button>

          {filesToSend.map((file) => (
            <Box display="flex">
              <AttachmentIcon mt="1"></AttachmentIcon>
              <Text ml="2" fontSize="lg">
                {file.name}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </ChakraProvider>
  );
};
