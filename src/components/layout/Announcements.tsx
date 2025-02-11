import { Box, VStack, Text, Flex, Icon } from '@chakra-ui/react';
import { FaEye } from 'react-icons/fa';
import Link from 'next/link';

interface Announcement {
  id: string;
  title: string;
  views: number;
}

interface AnnouncementsProps {
  announcements: Announcement[];
}

const Announcements = ({ announcements }: AnnouncementsProps) => {
  return (
    <VStack spacing={4} align="stretch">
      {announcements.map((announcement) => (
        <Link key={announcement.id} href={`/announcement/${announcement.id}`} passHref>
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            cursor="pointer"
            transition="all 0.2s"
            _hover={{
              transform: 'translateY(-2px)',
              shadow: 'md',
              borderColor: 'blue.200',
            }}
          >
            <Text fontWeight="medium" mb={2} noOfLines={2}>
              {announcement.title}
            </Text>
            <Flex align="center" color="gray.500" fontSize="sm">
              <Icon as={FaEye} mr={1} />
              <Text>{announcement.views} lượt xem</Text>
            </Flex>
          </Box>
        </Link>
      ))}
    </VStack>
  );
};

export default Announcements;
