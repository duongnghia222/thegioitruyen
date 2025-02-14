import { SimpleGrid } from '@chakra-ui/react';
import NovelCard from './NovelCard';
import { Novel } from '../../types/novel';

const sampleNovels: Novel[] = [
  {
    id: '1',
    title: 'Võ Luyện Đỉnh Phong',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
    rating: 9.2,
    views: 125000,
    chapters: 2514,
    author: 'Mạc Mặc',
    genres: ['Huyền Huyễn', 'Tu Tiên', 'Võ Hiệp'],
    status: 'ongoing',
  },
  {
    id: '2',
    title: 'Đấu La Đại Lục',
    cover: 'https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9',
    rating: 9.5,
    views: 250000,
    chapters: 1892,
    author: 'Đường Gia Tam Thiếu',
    genres: ['Huyền Huyễn', 'Dị Giới', 'Võ Hiệp'],
    status: 'completed',
  },
  {
    id: '3',
    title: 'Nguyên Tôn',
    cover: 'https://images.unsplash.com/photo-1589729482945-ca6f3a235f7a',
    rating: 8.9,
    views: 98000,
    chapters: 1256,
    author: 'Thiên Tằm Thổ Đậu',
    genres: ['Tu Tiên', 'Huyền Ảo', 'Dị Giới'],
    status: 'ongoing',
  },
  {
    id: '4',
    title: 'Phàm Nhân Tu Tiên',
    cover: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3',
    rating: 9.3,
    views: 180000,
    chapters: 3421,
    author: 'Vong Ngữ',
    genres: ['Tu Tiên', 'Huyền Huyễn', 'Tiên Hiệp'],
    status: 'completed',
  },
  {
    id: '5',
    title: 'Đế Bá',
    cover: 'https://images.unsplash.com/photo-1534447677768-be436bb09401',
    rating: 8.7,
    views: 75000,
    chapters: 986,
    author: 'Yếm Bút Tiêu Sinh',
    genres: ['Huyền Huyễn', 'Kiếm Hiệp', 'Dị Giới'],
    status: 'ongoing',
  },
  {
    id: '6',
    title: 'Thần Đạo Đan Tôn',
    cover: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16',
    rating: 9.0,
    views: 145000,
    chapters: 1678,
    author: 'Cô Đơn Địa Phi',
    genres: ['Tu Tiên', 'Huyền Huyễn', 'Dị Giới'],
    status: 'ongoing',
  },
];

const SampleNovelGrid = () => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={6} px={4}>
      {sampleNovels.map((novel) => (
        <NovelCard key={novel.id} novel={novel} />
      ))}
    </SimpleGrid>
  );
};

export default SampleNovelGrid; 