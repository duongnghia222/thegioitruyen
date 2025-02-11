import { Box, Flex, Input, Button, Text, IconButton, useColorMode } from '@chakra-ui/react';
import { FaUser, FaSearch, FaBookmark, FaQuestion } from 'react-icons/fa';
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
            TruyenHD
          </Text>
        </Link>

        {/* Navigation */}
        <Flex gap={6} ml={8}>
          <Link href="/danh-sach" passHref>
            <Text cursor="pointer">Danh Sách</Text>
          </Link>
          <Link href="/the-loai" passHref>
            <Text cursor="pointer">Thể Loại</Text>
          </Link>
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
