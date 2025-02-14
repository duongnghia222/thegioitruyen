import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const login = async (provider: string, credentials?: { email: string; password: string }) => {
    if (provider === 'credentials') {
      try {
        const result = await signIn('credentials', {
          ...credentials,
          redirect: false,
        });

        if (result?.error) {
          throw new Error(result.error);
        }

        return result;
      } catch (error) {
        throw error;
      }
    } else {
      return signIn(provider);
    }
  };

  const logout = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  const requireAuth = async (callback: () => void) => {
    if (status === 'loading') return;

    if (!session) {
      router.push('/auth/signin');
      return;
    }

    callback();
  };

  return {
    session,
    status,
    isAuthenticated: !!session,
    isLoading: status === 'loading',
    user: session?.user,
    login,
    logout,
    requireAuth,
  };
} 