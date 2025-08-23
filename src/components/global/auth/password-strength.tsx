import { passwordScore } from '@/lib/validations/auth';

export default function PasswordStrength({ value }: { value: string }) {
  const score = passwordScore(value);
  const steps = 5;
  return (
    <div className='mt-1'>
      <div className='h-1.5 w-full rounded bg-muted overflow-hidden'>
        <div
          className={`h-full transition-all ${
            score <= 1
              ? 'bg-red-500 w-1/5'
              : score === 2
              ? 'bg-orange-500 w-2/5'
              : score === 3
              ? 'bg-yellow-500 w-3/5'
              : score === 4
              ? 'bg-lime-500 w-4/5'
              : 'bg-green-600 w-full'
          }`}
        />
      </div>
      <p className='mt-1 text-xs text-muted-foreground'>
        Strength: {score}/{steps}
      </p>
    </div>
  );
}
