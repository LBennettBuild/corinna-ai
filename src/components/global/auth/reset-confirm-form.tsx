'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { resetConfirmSchema, type ResetConfirmInput } from '@/lib/validations/verify-reset';
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
import PasswordStrength from './password-strength';

export function ResetConfirmForm({ token }: { token: string }) {
  const form = useForm<ResetConfirmInput>({
    resolver: zodResolver(resetConfirmSchema),
    defaultValues: { password: '', confirm: '' },
    mode: 'onChange',
  });

  async function onSubmit(values: ResetConfirmInput) {
    // TODO: POST /api/auth/reset/confirm { token, ...values }
  }

  const pwd = form.watch('password');

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Новый пароль</FormLabel>
              <FormControl>
                <Input type='password' placeholder='••••••••' {...field} />
              </FormControl>
              <PasswordStrength value={pwd} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='confirm'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Подтвердите пароль</FormLabel>
              <FormControl>
                <Input type='password' placeholder='••••••••' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' type='submit'>
          Установить новый пароль
        </Button>
      </form>
    </Form>
  );
}
