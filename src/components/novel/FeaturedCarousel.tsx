import { Box, Text, Button, Flex, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';
import Slider from 'react-slick';
import { Novel } from '../../types/novel';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface FeaturedCarouselProps {
  novels: Novel[];
}

const FeaturedCarousel = ({ novels }: FeaturedCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { colorMode } = useColorMode();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <Box
        width="12px"
        height="12px"
        borderRadius="full"
        bg={i === currentSlide ? 'blue.500' : 'gray.300'}
        transition="all 0.2s"
        _hover={{ bg: 'blue.400' }}
      />
    ),
  };

  return (
    <Box
      position="relative"
      height={{ base: '300px', md: '400px' }}
      borderRadius="xl"
      overflow="hidden"
      boxShadow="xl"
    >
      <Slider {...settings}>
        {novels.map((novel) => (
          <Box key={novel.id} position="relative" height={{ base: '300px', md: '400px' }}>
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              zIndex={1}
              background="linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)"
            />
            <Image
              src="/covers/novel1.jpg"
              alt="Novel cover"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Flex
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              p={6}
              zIndex={2}
              flexDirection="column"
              color="white"
            >
              <Text
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="bold"
                mb={2}
                textShadow="2px 2px 4px rgba(0,0,0,0.4)"
              >
                {novel.title}
              </Text>
              <Flex gap={4} mb={4}>
                <Text>⭐ {novel.rating.toFixed(2)}/10</Text>
                <Text>👁️ {novel.views.toLocaleString()} lượt xem</Text>
                <Text>📚 {novel.chapters} chương</Text>
              </Flex>
              <Link href={`/novel/${novel.id}`} passHref>
                <Button
                  colorScheme="blue"
                  size="lg"
                  width={{ base: '100%', md: 'auto' }}
                >
                  Đọc Ngay
                </Button>
              </Link>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default FeaturedCarousel;
