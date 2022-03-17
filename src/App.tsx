import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Button,
  Menu,
  MenuItem,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { MyDropzone } from "./dropzone";
import { AttachmentIcon, ChevronDownIcon } from "@chakra-ui/icons";
import axios from "axios";

export const App = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("");
  const [filesToSend, setFilesToSend] = useState<any[]>([]);

  const AlgorithMenu = (
    <>
      <Menu>
        <Box maxWidth="140" height="12" display="flex">
          <MenuItem
            onClick={() => {
              setFilesToSend([]);
              setSelectedMenu("ALGORITMO_1");
            }}
          >
            Algoritmo 1
          </MenuItem>
          <MenuItem
            onClick={() => {
              setFilesToSend([]);
              setSelectedMenu("ALGORITMO_2");
            }}
          >
            Algoritmo 2
          </MenuItem>
          <MenuItem
            onClick={() => {
              setFilesToSend([]);
              setSelectedMenu("ALGORITMO_3");
            }}
          >
            Algoritmo 3
          </MenuItem>
        </Box>
      </Menu>
      <ColorModeSwitcher></ColorModeSwitcher>
    </>
  );

  const Alg1 = (
    <Box mt="12">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
        temporibus ab placeat reprehenderit culpa labore dignissimos quam.
        Dolorem, laborum. Placeat id labore aperiam repellendus at aspernatur,
        quaerat ut? Dolorum dolores tempore delectus eum id animi, incidunt modi
        praesentium, ab, rerum nemo ex laboriosam placeat eveniet fugit maxime
        perferendis odit non.
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
  );

  const Alg2 = (
    <Box mt="12">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
        temporibus ab placeat reprehenderit culpa labore dignissimos quam.
        Dolorem, laborum. Placeat id labore aperiam repellendus at aspernatur,
        quaerat ut? Dolorum dolores tempore delectus eum id animi, incidunt modi
        praesentium, ab, rerum nemo ex laboriosam placeat eveniet fugit maxime
        perferendis odit non.
      </Text>
      <MyDropzone setFilesToSend={setFilesToSend} />
      <Button mb="12" onClick={() => console.log(filesToSend)}>
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
  );

  const Alg3 = (
    <Box mt="12">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
        temporibus ab placeat reprehenderit culpa labore dignissimos quam.
        Dolorem, laborum. Placeat id labore aperiam repellendus at aspernatur,
        quaerat ut? Dolorum dolores tempore delectus eum id animi, incidunt modi
        praesentium, ab, rerum nemo ex laboriosam placeat eveniet fugit maxime
        perferendis odit non.
      </Text>
      <MyDropzone setFilesToSend={setFilesToSend} />
      <Button mb="12" onClick={() => console.log(filesToSend)}>
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
  );

  const getSelectedMenuInfo = (selectedMenu: string): string => {
    switch (selectedMenu) {
      case "ALGORITMO_1":
        return "Algoritmo 1";
      case "ALGORITMO_2":
        return "Algoritmo 2";
      case "ALGORITMO_3":
        return "Algoritmo 3";
      default:
        return "Bem vindo";
    }
  };

  const getFuncMenuInfo = (selectedMenu: string) => {
    switch (selectedMenu) {
      case "ALGORITMO_1":
        return Alg1;
      case "ALGORITMO_2":
        return Alg2;
      case "ALGORITMO_3":
        return Alg3;
      default:
        return (
          <Text mt="24" textAlign="center" fontSize="4xl">
            Breve explicação da plataforma, como objetivo e envolvidos
          </Text>
        );
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box margin="auto" maxWidth="800">
        {AlgorithMenu}
        <Text mt="12" textAlign="center" fontSize="4xl">
          {getSelectedMenuInfo(selectedMenu)}
        </Text>

        {getFuncMenuInfo(selectedMenu)}
      </Box>
    </ChakraProvider>
  );
};
