import { Box, Image, Text, Badge, Flex, Button } from '@chakra-ui/react';
import { FaEye, FaStar } from 'react-icons/fa';
import { Novel } from '../../types/novel';
import Link from 'next/link';

interface NovelCardProps {
  novel: Novel;
}

const NovelCard = ({ novel }: NovelCardProps) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.2s"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'lg',
      }}
    >
      <Box position="relative" paddingTop="140%">
        <Image
          src={novel.cover}
          alt={novel.title}
          position="absolute"
          top={0}
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>

      <Box p={4}>
        <Text
          fontWeight="bold"
          fontSize="lg"
          noOfLines={2}
          mb={2}
        >
          {novel.title}
        </Text>

        <Flex justify="space-between" align="center" mb={2}>
          <Flex align="center">
            <FaStar color="gold" />
            <Text ml={1}>{novel.rating.toFixed(2)}/10</Text>
          </Flex>
          <Flex align="center">
            <FaEye />
            <Text ml={1}>
              {novel.views >= 1000 
                ? `${(novel.views / 1000).toFixed(1)}K`
                : novel.views}
            </Text>
          </Flex>
        </Flex>

        <Flex gap={2} mb={3} flexWrap="wrap">
          {novel.genres.map((genre) => (
            <Badge
              key={genre}
              colorScheme="blue"
              variant="subtle"
              fontSize="xs"
            >
              {genre}
            </Badge>
          ))}
        </Flex>

        <Link href={`/novel/${novel.id}`} passHref>
          <Button
            width="100%"
            colorScheme="blue"
            size="sm"
          >
            Đọc Truyện
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NovelCard;
