import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to LoveConnect
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Find your perfect match today. Join our community and start connecting with amazing people.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/romantic-date.jpg" alt="Romantic Date" borderRadius="md" />
        </Box>
        <Button colorScheme="pink" size="lg" leftIcon={<FaHeart />}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;