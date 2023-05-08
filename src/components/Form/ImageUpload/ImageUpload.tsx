import React, { useState } from "react";
import { Flex, Icon, Image, Text, Button } from "@chakra-ui/react";
import { MdOutlineImage } from "react-icons/md";

interface Props {
  name: string;
  src?: string;
  onImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUpload = ({ name, onImageChange, src }: Props) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(src ?? "");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
    onImageChange(event);
  };

  return (
    <Flex alignItems="center" gap={4}>
      {imageUrl ? (
        <Image
          boxSize="100px"
          color="gray.500"
          borderRadius="2xl"
          src={imageUrl}
          alt={name}
        />
      ) : (
        <Icon
          as={MdOutlineImage}
          p={7}
          boxSize="100px"
          color="gray.500"
          border="3px solid"
          bg="gray.100"
          borderColor="gray.500"
          borderRadius="2xl"
        />
      )}
      <Text fontSize="lg">{name}</Text>

      <Button colorScheme="blue" isDisabled={!!imageUrl} p={0}>
        <label htmlFor="file-input" style={{ padding: "10px" }}>
          Upload
        </label>
      </Button>
      {imageUrl && (
        <Button colorScheme="blue" p={0}>
          <label htmlFor="file-input" style={{ padding: "10px" }}>
            Change
          </label>
        </Button>
      )}

      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </Flex>
  );
};

export default ImageUpload;
