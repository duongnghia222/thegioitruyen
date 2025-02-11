import { Box, Grid, Heading, Text, Button, Flex, useColorMode } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
import NovelCard from '../components/novel/NovelCard';
import FeaturedCarousel from '../components/novel/FeaturedCarousel';
import Announcements from '../components/layout/Announcements';
import RecentUpdates from '../components/novel/RecentUpdates';
import { GetServerSideProps } from 'next';
import { Novel } from '../types/novel';

interface HomeProps {
  featuredNovels: Novel[];
  recentUpdates: Novel[];
  announcements: Array<{
    id: string;
    title: string;
    views: number;
  }>;
}

export default function Home({ featuredNovels, recentUpdates, announcements }: HomeProps) {
  const { colorMode } = useColorMode();

  return (
    <Layout>
      <Grid templateColumns={{ base: '1fr', md: '250px 1fr' }} gap={8}>
        {/* Left Sidebar - Announcements */}
        <Box>
          <Heading size="md" mb={4}>Thông Báo</Heading>
          <Announcements announcements={announcements} />
        </Box>

        {/* Main Content */}
        <Box>
          {/* Featured Carousel */}
          <Box mb={8}>
            <FeaturedCarousel novels={featuredNovels} />
          </Box>

          {/* Post Story Button */}
          <Flex justify="center" mb={8}>
            <Button
              colorScheme="blue"
              size="lg"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              Đăng truyện
            </Button>
          </Flex>

          {/* Recommended Section */}
          <Box mb={8}>
            <Heading size="lg" mb={4}>BTY Đề Cử</Heading>
            <Grid
              templateColumns={{
                base: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)'
              }}
              gap={6}
            >
              {featuredNovels.map((novel) => (
                <NovelCard key={novel.id} novel={novel} />
              ))}
            </Grid>
          </Box>

          {/* Recent Updates */}
          <Box>
            <Heading size="lg" mb={4}>Mới Cập Nhật</Heading>
            <RecentUpdates updates={recentUpdates} />
          </Box>
        </Box>
      </Grid>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // This would normally fetch from your API
  const mockData = {
    featuredNovels: [
      {
        id: '1',
        title: 'Võ Luyện Đỉnh Phong',
        cover: '/covers/novel1.jpg',
        rating: 7.46,
        views: 50000,
        chapters: 1500,
        author: 'Tác giả 1',
        genres: ['Cultivation', 'Action']
      },
      // Add more mock novels...
    ],
    recentUpdates: [
      // Mock recent updates...
    ],
    announcements: [
      {
        id: '1',
        title: 'Thông báo bảo trì hệ thống',
        views: 204
      },
      // Add more announcements...
    ]
  };

  return {
    props: mockData
  };
};
