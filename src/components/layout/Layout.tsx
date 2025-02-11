import { Box } from '@chakra-ui/react';
import Header from './Header';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100vh">
      <Header />
      <Box as="main" maxW="1200px" mx="auto" px={4} py={8}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
