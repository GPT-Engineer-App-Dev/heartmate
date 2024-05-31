import React, { useEffect, useState } from 'react';
import { Container, VStack, Heading, Text, Box, Image } from '@chakra-ui/react';

const MatchRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const profileData = JSON.parse(localStorage.getItem('profileData'));
    if (profileData) {
      // Simulate fetching match recommendations based on profile data
      const matches = getMatchRecommendations(profileData);
      setRecommendations(matches);
    }
  }, []);

  const getMatchRecommendations = (profileData) => {
    // Simulate match recommendation logic
    const allProfiles = [
      { name: 'Alice', age: 25, gender: 'female', interests: 'music, hiking', profilePicture: '/images/profile1.jpg' },
      { name: 'Bob', age: 30, gender: 'male', interests: 'movies, sports', profilePicture: '/images/profile2.jpg' },
      { name: 'Charlie', age: 28, gender: 'male', interests: 'reading, traveling', profilePicture: '/images/profile3.jpg' },
    ];

    // Filter profiles based on interests and age range
    return allProfiles.filter(profile => 
      profile.interests.split(', ').some(interest => profileData.interests.includes(interest)) &&
      Math.abs(profile.age - profileData.age) <= 5
    );
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">Match Recommendations</Heading>
        {recommendations.length > 0 ? (
          recommendations.map((match, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
              <Image src={match.profilePicture} alt={match.name} boxSize="150px" borderRadius="full" mb={4} />
              <Heading as="h3" size="lg">{match.name}</Heading>
              <Text>Age: {match.age}</Text>
              <Text>Gender: {match.gender}</Text>
              <Text>Interests: {match.interests}</Text>
            </Box>
          ))
        ) : (
          <Text>No match recommendations available.</Text>
        )}
      </VStack>
    </Container>
  );
};

export default MatchRecommendations;