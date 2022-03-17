import { SmallAddIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/layout";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export function MyDropzone({
  setFilesToSend,
}: {
  setFilesToSend: (acceptedFiles: any[]) => void;
}) {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    if (acceptedFiles) setFilesToSend(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg={"#2b313d"}
      height="200"
      margin="12"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Text>DroText the files here ...</Text>
      ) : (
        <Box display="flex" alignItems="center" flexDirection="column">
          <SmallAddIcon textAlign="center" />
          <Text textAlign="center">
            Arraste ou clique para adicionar um arquivo ...
          </Text>
        </Box>
      )}
    </Box>
  );
}
