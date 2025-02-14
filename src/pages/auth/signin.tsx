import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Divider,
  useToast,
  Container,
} from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';
import Layout from '../../components/layout/Layout';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const toast = useToast();

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login('credentials', { email, password });
      if (result?.error) {
        toast({
          title: 'Error',
          description: result.error,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleGoogleLogin = () => {
    login('google');
  };

  return (
    <Layout>
      <Container maxW="container.sm" py={10}>
        <Box
          p={8}
          borderWidth={1}
          borderRadius="lg"
          boxShadow="lg"
        >
          <VStack spacing={4} align="stretch">
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">
              Đăng Nhập
            </Text>

            <form onSubmit={handleCredentialsLogin}>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Mật khẩu</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  width="100%"
                >
                  Đăng Nhập
                </Button>
              </VStack>
            </form>

            <Divider />

            <Button
              leftIcon={<FaGoogle />}
              onClick={handleGoogleLogin}
              width="100%"
              variant="outline"
            >
              Đăng nhập với Google
            </Button>
          </VStack>
        </Box>
      </Container>
    </Layout>
  );
} 