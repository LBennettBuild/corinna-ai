'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { resetRequestSchema, type ResetRequestInput } from '@/lib/validations/verify-reset';
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

export function ResetRequestForm() {
  const form = useForm<ResetRequestInput>({
    resolver: zodResolver(resetRequestSchema),
    defaultValues: { email: '' },
  });

  async function onSubmit(values: ResetRequestInput) {
    // TODO: POST /api/auth/reset/request
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder='you@example.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' type='submit'>
          Send reset link
        </Button>
      </form>
    </Form>
  );
}
