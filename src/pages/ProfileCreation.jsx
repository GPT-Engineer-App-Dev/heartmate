import React, { useState } from 'react';
import { Container, VStack, Heading, Input, Button, FormControl, FormLabel, Select, Textarea, Image } from '@chakra-ui/react';

const ProfileCreation = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [interests, setInterests] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, age, gender, interests, profilePicture });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Create Your Profile</Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="age" isRequired>
          <FormLabel>Age</FormLabel>
          <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </FormControl>
        <FormControl id="gender" isRequired>
          <FormLabel>Gender</FormLabel>
          <Select placeholder="Select gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
        </FormControl>
        <FormControl id="interests" isRequired>
          <FormLabel>Interests</FormLabel>
          <Textarea value={interests} onChange={(e) => setInterests(e.target.value)} />
        </FormControl>
        <FormControl id="profilePicture" isRequired>
          <FormLabel>Profile Picture</FormLabel>
          <Input type="file" accept="image/*" onChange={handleProfilePictureChange} />
          {profilePicture && <Image src={profilePicture} alt="Profile Preview" boxSize="150px" mt={4} />}
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg">Create Profile</Button>
      </VStack>
    </Container>
  );
};

export default ProfileCreation;