import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  VStack,
  StackDivider,
  Flex,
  Spacer,
  Box,
  Image,
} from "@chakra-ui/react";

import FormToolbar from "../../../components/Form/FormToolbar/FormToolbar";
import CustomInput from "../../../components/Form/CustomInput/CustomInput";

const CreateComplaint = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [suggestion, setSuggestion] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: handle form submission
    e.preventDefault();

    const data = {
      title,
      description,
      suggestion,
      attachments: images,
    };
    console.log("Form submitted with data:", data);
  };
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newImages = Array.from(e.target.files as Iterable<File>);
    setImages([...images, ...newImages] as File[]);
  };

  return (
    <Box bg="whiteAlpha.900 " p="5" rounded={10}>
      <form action="submit" onSubmit={handleSubmit}>
        <VStack
          mt="6"
          divider={<StackDivider borderColor="gray.300" />}
          align="stretch"
          spacing={8}
        >
          <FormToolbar
            backButtonLink="complaints"
            pageTitle="Create New Complaint"
          />
          <CustomInput
            label="Title"
            value={title}
            setValue={setTitle}
            placeholder="Title"
          />
          <CustomInput
            label="Description"
            value={description}
            setValue={setDescription}
            placeholder="Description"
            type="textarea"
          />

          <CustomInput
            label="Suggestions"
            value={suggestion}
            setValue={setSuggestion}
            placeholder="Suggestions"
            type="textarea"
          />

          <FormControl id="contact-number" display="flex" alignItems="baseline">
            <Flex alignItems="center">
              <FormLabel>Attachments</FormLabel>
              <input type="file" id="file-input" onChange={handleImageChange} />
              {images.length === 0 && (
                <Button colorScheme="green" size="sm">
                  <label htmlFor="file-input">Choose files</label>
                </Button>
              )}
              {images.length > 0 && (
                <Button colorScheme="green" size="sm">
                  <label htmlFor="file-input">Add More</label>
                </Button>
              )}
              {images.map((image, index) => (
                <Box
                  key={index}
                  m={5}
                  borderRadius="md"
                  display="flex"
                  flexDirection="column"
                >
                  <Image
                    boxSize={100}
                    objectFit="cover"
                    src={URL.createObjectURL(image)}
                    alt={`Image ${index}`}
                    border="1px solid black"
                    borderRadius="md"
                  />
                  <Button
                    colorScheme="green"
                    variant="ghost"
                    onClick={(e) =>
                      setImages(images.filter((e) => e !== image))
                    }
                  >
                    Delete
                  </Button>
                </Box>
              ))}
            </Flex>
          </FormControl>

          <Spacer></Spacer>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateComplaint;