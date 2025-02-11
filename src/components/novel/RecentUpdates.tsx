import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Link as ChakraLink,
  Badge,
  Flex,
} from '@chakra-ui/react';
import { Novel } from '../../types/novel';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';

interface RecentUpdatesProps {
  updates: Novel[];
}

const RecentUpdates = ({ updates }: RecentUpdatesProps) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th width="50px">#</Th>
          <Th>Tên Truyện</Th>
          <Th>Thể Loại</Th>
          <Th>Cập Nhật</Th>
          <Th isNumeric>Lượt Xem</Th>
        </Tr>
      </Thead>
      <Tbody>
        {updates.map((novel, index) => (
          <Tr key={novel.id} _hover={{ bg: 'gray.50' }}>
            <Td>{index + 1}</Td>
            <Td>
              <Link href={`/novel/${novel.id}`} passHref>
                <ChakraLink fontWeight="medium">
                  {novel.title}
                </ChakraLink>
              </Link>
            </Td>
            <Td>
              <Flex gap={2} flexWrap="wrap">
                {novel.genres.slice(0, 2).map((genre) => (
                  <Badge key={genre} colorScheme="blue" variant="subtle">
                    {genre}
                  </Badge>
                ))}
              </Flex>
            </Td>
            <Td>
              {novel.lastUpdated && (
                <Text fontSize="sm" color="gray.600">
                  {formatDistanceToNow(new Date(novel.lastUpdated), {
                    addSuffix: true,
                    locale: vi,
                  })}
                </Text>
              )}
            </Td>
            <Td isNumeric>
              <Text>
                {novel.views >= 1000
                  ? `${(novel.views / 1000).toFixed(1)}K`
                  : novel.views}
              </Text>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default RecentUpdates;
