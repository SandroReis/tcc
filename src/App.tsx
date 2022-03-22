import React, { useMemo, useState } from "react";
import { Formik } from "formik";
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  CheckboxGroup,
  Stack,
  Checkbox,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { MyDropzone } from "./dropzone";
import { AttachmentIcon } from "@chakra-ui/icons";
import axios from "axios";
import theme from "./theme";

export const App = () => {
  const [filesToSend, setFilesToSend] = useState<any[]>([]);
  const [selectedAlgorithms, setSelectedAlgorithms] = useState<any[]>([]);
  const [paramsPayload, setParamsPayload] = useState<any>({
    dfa: {
      one: null,
      two: null,
    },
    gpa: {
      one: null,
      two: null,
    },
    haralick: {
      one: null,
      two: null,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Box mx="auto" maxWidth="1200">
        <Text mt="2" textAlign="center" fontSize="2xl">
          Titulo do Projeto
        </Text>
        <Box mt="8">
          <Text textAlign="center">
            @TODO: Escrever aqui uma breve explicação sobre o uso do sistema e o
            que esperar como resposta.
          </Text>
          <FormControl variant="floating">
            <Box display="flex" justifyContent="space-around" mt="8">
              <Box mt="8">
                <CheckboxGroup
                  onChange={(value) => setSelectedAlgorithms(value)}
                  colorScheme="green"
                >
                  <Text mb="4">
                    <strong>Algoritmos de processamento de imagens</strong>
                  </Text>
                  <Stack spacing={[1, 5]} direction={["row", "column"]}>
                    <Checkbox value="DFA">
                      DFA (Detrended Fluctuation Analysis)
                    </Checkbox>
                    <Checkbox value="GPA">
                      GPA (Gradient pattern analysis)
                    </Checkbox>
                    <Checkbox value="Haralick">Haralick</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </Box>
              <Box
                display="flex"
                flexWrap="wrap"
                gap="8"
                justifyContent="center"
                mt="4"
              >
                <Box mt="4">
                  <FormLabel>Parametro 1 DFA</FormLabel>
                  <Input
                    disabled={!selectedAlgorithms.includes("DFA")}
                    maxWidth="48"
                    placeholder="Valor default..."
                    value={paramsPayload.dfa.one || ""}
                    onChange={(event) => {
                      const newPayload = { ...paramsPayload };
                      newPayload.dfa.one = event.target.value;
                      setParamsPayload(newPayload);
                    }}
                  ></Input>
                  <FormLabel mt="2">Parametro 2 DFA</FormLabel>
                  <Input
                    disabled={!selectedAlgorithms.includes("DFA")}
                    maxWidth="48"
                    placeholder="Valor default..."
                    value={paramsPayload.dfa.two || ""}
                    onChange={(event) => {
                      const newPayload = { ...paramsPayload };
                      newPayload.dfa.two = event.target.value;
                      setParamsPayload(newPayload);
                    }}
                  ></Input>
                </Box>
                <Box mt="4">
                  <FormLabel>Parametro 1 GPA</FormLabel>
                  <Input
                    disabled={!selectedAlgorithms.includes("GPA")}
                    maxWidth="48"
                    placeholder="Valor default..."
                    value={paramsPayload.gpa.one || ""}
                    onChange={(event) => {
                      const newPayload = { ...paramsPayload };
                      newPayload.gpa.one = event.target.value;
                      setParamsPayload(newPayload);
                    }}
                  ></Input>
                  <FormLabel mt="2">Parametro 2 GPA</FormLabel>
                  <Input
                    disabled={!selectedAlgorithms.includes("GPA")}
                    maxWidth="48"
                    placeholder="Valor default..."
                    value={paramsPayload.gpa.two || ""}
                    onChange={(event) => {
                      console.log(event.target.value);
                      const newPayload = { ...paramsPayload };
                      newPayload.gpa.two = event.target.value;
                      setParamsPayload(newPayload);
                    }}
                  ></Input>
                </Box>
                <Box mt="4">
                  <FormLabel>Parametro 1 Haralick</FormLabel>
                  <Input
                    disabled={!selectedAlgorithms.includes("Haralick")}
                    maxWidth="48"
                    placeholder="Valor default..."
                    value={paramsPayload.haralick.one || ""}
                    onChange={(event) => {
                      const newPayload = { ...paramsPayload };
                      newPayload.haralick.one = event.target.value;
                      setParamsPayload(newPayload);
                    }}
                  ></Input>
                  <FormLabel mt="2">Parametro 2 Haralick</FormLabel>
                  <Input
                    disabled={!selectedAlgorithms.includes("Haralick")}
                    maxWidth="48"
                    placeholder="Valor default..."
                    value={paramsPayload.haralick.two || ""}
                    onChange={(event) => {
                      const newPayload = { ...paramsPayload };
                      newPayload.haralick.two = event.target.value;
                      setParamsPayload(newPayload);
                    }}
                  ></Input>
                </Box>
              </Box>
            </Box>
            <MyDropzone setFilesToSend={setFilesToSend} />
            <Box display="flex" justifyContent="center">
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
            </Box>

            {filesToSend.map((file) => (
              <Box display="flex">
                <AttachmentIcon mt="1"></AttachmentIcon>
                <Text ml="2" fontSize="lg">
                  {file.name}
                </Text>
              </Box>
            ))}
          </FormControl>
        </Box>
      </Box>
    </ChakraProvider>
  );
};
