import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/auth';

export function ProtectRoute(Component) {
  return () => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated && !loading) router.push('/login');
    }, [isAuthenticated, loading]);

    return <Component {...arguments} />;
  };
}
