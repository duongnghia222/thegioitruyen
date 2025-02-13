import { Box, Flex, Input, Button, Text, IconButton, useColorMode, Menu, MenuButton, MenuList, MenuItem, SimpleGrid } from '@chakra-ui/react';
import { FaUser, FaSearch, FaBookmark, FaQuestion, FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();
  const { colorMode } = useColorMode();

  const neonBlue = {
    light: 'blue.400',
    dark: 'blue.300'
  };

  return (
    <Box as="header" py={4} px={8} borderBottom="1px" borderColor="gray.200">
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        {/* Logo */}
        <Link href="/" passHref>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color={neonBlue[colorMode]}
            textShadow={`0 0 10px ${colorMode === 'light' ? '#3182CE' : '#63B3ED'}`}
            cursor="pointer"
          >
            TruyenBanQuyen
          </Text>
        </Link>

        {/* Navigation */}
        <Flex gap={6} ml={8}>
          <Link href="/danh-sach" passHref>
            <Text cursor="pointer">Danh Sách</Text>
          </Link>
          <Menu isLazy>
            <MenuButton as={Text} cursor="pointer" display="flex" alignItems="center">
              Thể Loại <FaChevronDown size="12px" style={{ marginLeft: '4px' }} />
            </MenuButton>
            <MenuList maxW="800px" p={4}>
              <SimpleGrid columns={3} spacing={4}>
                <Box>
                  <MenuItem icon={<Text>♀</Text>} as={Link} href="/the-loai/bach-hop">Bách Hợp</MenuItem>
                  <MenuItem as={Link} href="/the-loai/di-gioi">Dị Giới</MenuItem>
                  <MenuItem as={Link} href="/the-loai/hai-huoc">Hài Hước</MenuItem>
                  <MenuItem icon={<Text>🔬</Text>} as={Link} href="/the-loai/khoa-huyen">Khoa Huyễn</MenuItem>
                  <MenuItem as={Link} href="/the-loai/linh-di">Linh Dị</MenuItem>
                  <MenuItem as={Link} href="/the-loai/nguoc">Ngược</MenuItem>
                  <MenuItem as={Link} href="/the-loai/phuong-tay">Phương Tây</MenuItem>
                  <MenuItem icon={<Text>❤</Text>} as={Link} href="/the-loai/sung">Sủng</MenuItem>
                  <MenuItem icon={<Text>👶</Text>} as={Link} href="/the-loai/truyen-teen">Truyện Teen</MenuItem>
                  <MenuItem as={Link} href="/the-loai/tong-tai">Tổng Tài</MenuItem>
                  <MenuItem icon={<Text>↩</Text>} as={Link} href="/the-loai/xuyen-khong">Xuyên Không</MenuItem>
                  <MenuItem as={Link} href="/the-loai/dien-van">Điền Văn</MenuItem>
                </Box>
                <Box>
                  <MenuItem as={Link} href="/the-loai/can-dai">Cận Đại</MenuItem>
                  <MenuItem as={Link} href="/the-loai/di-nang">Dị Năng</MenuItem>
                  <MenuItem as={Link} href="/the-loai/hac-bang">Hắc Bang</MenuItem>
                  <MenuItem as={Link} href="/the-loai/kiem-hiep">Kiếm Hiệp</MenuItem>
                  <MenuItem as={Link} href="/the-loai/mat-the">Mạt Thế</MenuItem>
                  <MenuItem as={Link} href="/the-loai/nu-cuong">Nữ Cường</MenuItem>
                  <MenuItem as={Link} href="/the-loai/quan-nhan">Quân Nhân</MenuItem>
                  <MenuItem as={Link} href="/the-loai/tien-hiep">Tiên Hiệp</MenuItem>
                  <MenuItem as={Link} href="/the-loai/trong-sinh">Trọng Sinh</MenuItem>
                  <MenuItem icon={<Text>🎮</Text>} as={Link} href="/the-loai/vong-du">Võng Du</MenuItem>
                  <MenuItem as={Link} href="/the-loai/xuyen-nhanh">Xuyên Nhanh</MenuItem>
                  <MenuItem as={Link} href="/the-loai/do-thi">Đô Thị</MenuItem>
                </Box>
                <Box>
                  <MenuItem as={Link} href="/the-loai/co-dai">Cổ Đại</MenuItem>
                  <MenuItem icon={<Text>✨</Text>} as={Link} href="/the-loai/huyen-huyen">Huyền Huyễn</MenuItem>
                  <MenuItem icon={<Text>⚙</Text>} as={Link} href="/the-loai/he-thong">Hệ Thống</MenuItem>
                  <MenuItem as={Link} href="/the-loai/ky-huyen">Kỳ Huyễn</MenuItem>
                  <MenuItem icon={<Text>💕</Text>} as={Link} href="/the-loai/ngon-tinh">Ngôn Tình</MenuItem>
                  <MenuItem as={Link} href="/the-loai/nu-phu">Nữ Phụ</MenuItem>
                  <MenuItem as={Link} href="/the-loai/showbiz">Showbiz</MenuItem>
                  <MenuItem as={Link} href="/the-loai/trinh-tham">Trinh Thám</MenuItem>
                  <MenuItem as={Link} href="/the-loai/tuong-lai">Tương Lai</MenuItem>
                  <MenuItem as={Link} href="/the-loai/vuon-truong">Vườn Trường</MenuItem>
                  <MenuItem icon={<Text>🌹</Text>} as={Link} href="/the-loai/dam-my">Đam Mỹ</MenuItem>
                  <MenuItem icon={<Text>©</Text>} as={Link} href="/the-loai/dong-nhan">Đồng Nhân</MenuItem>
                </Box>
              </SimpleGrid>
            </MenuList>
          </Menu>
        </Flex>

        {/* Search Bar */}
        <Flex flex={1} mx={8}>
          <Input
            placeholder="Nhập Tên Truyện..."
            size="md"
            borderRadius="full"
            mr={2}
          />
          <IconButton
            aria-label="Search"
            icon={<FaSearch />}
            borderRadius="full"
            colorScheme="blue"
          />
        </Flex>

        {/* User Actions */}
        <Flex gap={4} align="center">
          <Link href="/bookmark" passHref>
            <IconButton
              aria-label="Bookmarks"
              icon={<FaBookmark />}
              variant="ghost"
            />
          </Link>
          <Link href="/help" passHref>
            <IconButton
              aria-label="Help"
              icon={<FaQuestion />}
              variant="ghost"
            />
          </Link>
          {session ? (
            <Link href="/profile" passHref>
              <IconButton
                aria-label="Profile"
                icon={<FaUser />}
                variant="ghost"
              />
            </Link>
          ) : (
            <Link href="/auth/signin" passHref>
              <Button colorScheme="blue" variant="outline">
                Đăng Nhập
              </Button>
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
