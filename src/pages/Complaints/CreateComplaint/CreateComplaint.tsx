import { useState, ChangeEvent } from "react";
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
import { useAuth } from "../../../hooks/Auth/useAuth";
import { UserRole } from "../../../constant/UserRoles";
import { useCreateComplaint } from "../../../hooks/Complaints/useCreateComplaint";
import { objectToFormData } from "../../../utils/objectToFormData";

const CreateComplaint = () => {
  const { user } = useAuth();
  const { mutate, error, isSuccess } = useCreateComplaint();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    suggestion: "",
    submittedBy: user?.id,
    organization: user?.organization?.id,
    attachments: [],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(objectToFormData(formData));

    console.log("Form submitted with data:", formData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newImages = Array.from(e.target.files as Iterable<File>);
    setFormData({
      ...formData,
      attachments: [...formData.attachments, ...newImages],
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            name="title"
            value={formData?.title}
            handleChange={handleChange}
            placeholder="Title"
          />
          <CustomInput
            label="Description"
            name="description"
            value={formData.description}
            handleChange={handleChange}
            placeholder="Description"
            type="textarea"
          />
          {user?.role?.name === UserRole.EMPLOYEE && (
            <CustomInput
              label="Suggestions"
              name="suggestion"
              value={formData.suggestion}
              handleChange={handleChange}
              placeholder="Suggestions"
              type="textarea"
            />
          )}
          {user?.role?.name === UserRole.ADMIN && (
            <FormControl
              id="contact-number"
              display="flex"
              alignItems="baseline"
            >
              <Flex alignItems="center">
                <FormLabel>Attachments</FormLabel>
                <input
                  type="file"
                  id="file-input"
                  onChange={handleImageChange}
                />
                {formData.attachments.length === 0 && (
                  <Button colorScheme="green" size="sm">
                    <label htmlFor="file-input">Choose files</label>
                  </Button>
                )}
                {formData.attachments.length > 0 && (
                  <Button colorScheme="green" size="sm">
                    <label htmlFor="file-input">Add More</label>
                  </Button>
                )}
                {formData.attachments.map((image, index) => (
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
                        setFormData({
                          ...formData,
                          attachments: formData.attachments.filter(
                            (e) => e !== image
                          ),
                        })
                      }
                    >
                      Delete
                    </Button>
                  </Box>
                ))}
              </Flex>
            </FormControl>
          )}

          <Spacer></Spacer>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateComplaint;
