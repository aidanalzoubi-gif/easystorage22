import { Suspense } from 'react';
import { ConfirmationPageContent } from '@/components/confirmation/confirmation-page';

export const dynamic = 'force-dynamic';

function ConfirmationFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="mt-4 text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<ConfirmationFallback />}>
      <ConfirmationPageContent />
    </Suspense>
  );
}
