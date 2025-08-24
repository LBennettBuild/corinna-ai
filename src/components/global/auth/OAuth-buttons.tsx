'use client';
import { Button } from '@/components/ui/button';
import { useAuthUI } from '@/stores/auth-store';
import { Icons } from '../../icons';

export default function OAuthButtons() {
  const { oauthLoading, setOauthLoading } = useAuthUI();
  const click = async () => {
    setOauthLoading(true);
    try {
      // TODO: integrate Clerk/NextAuth/your OAuth here
      // e.g. signIn("google")
    } finally {
      setOauthLoading(false);
    }
  };
  return (
    <Button variant='outline' className='w-full' onClick={click} disabled={oauthLoading}>
      <Icons.google className='mr-2 h-4 w-4' /> Продолжить с Google
    </Button>
  );
}
