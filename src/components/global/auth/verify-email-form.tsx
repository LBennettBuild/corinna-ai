'use client';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { verifyEmailSchema, type VerifyEmailInput } from '@/lib/validations/verify-reset';
import { useAuthUI } from '@/stores/auth-store';

export default function VerifyEmailForm({ email }: { email: string }) {
  const form = useForm<VerifyEmailInput>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: { email, code: '' },
  });
  const { loading, setLoading } = useAuthUI();
  const [sent, setSent] = useState(false);
  const [seconds, setSeconds] = useState(0);

  async function onSubmit(values: VerifyEmailInput) {
    setLoading(true);
    try {
      // TODO: call your API /auth/verify
      // redirect to /agency/create on success
    } finally {
      setLoading(false);
    }
  }

  async function resend() {
    if (seconds > 0) return;
    setSent(true);
    setSeconds(30);
    // TODO: call /auth/verify/resend
    const t = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          clearInterval(t);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  }

  return (
    <div>
      <p className='text-sm text-muted-foreground mb-4'>
        We sent a 6‑digit code to <span className='font-medium'>{email}</span>. Enter it below to
        verify your email.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name='code'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Verification code</FormLabel>
                <FormControl>
                  <Input inputMode='numeric' maxLength={6} placeholder='123456' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='w-full' disabled={loading}>
            Verify email
          </Button>
        </form>
      </Form>

      <div className='mt-4 flex items-center justify-between text-sm'>
        <span className='text-muted-foreground'>
          Didn't get the code? {sent && seconds > 0 && <span>Resend in {seconds}s</span>}
        </span>
        <button onClick={resend} className='underline disabled:opacity-50' disabled={seconds > 0}>
          Resend code
        </button>
      </div>
    </div>
  );
}
