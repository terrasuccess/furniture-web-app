
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';
import { Check } from 'lucide-react';

export const Confirmation = () => {
  const { resetForm } = useFormStore();

  return (
    <div className="text-center space-y-8">
      <div className="flex justify-center">
        <div className="rounded-full bg-green-100 p-4 ring-4 ring-green-50">
          <Check className="w-10 h-10 text-green-600" />
        </div>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight">Thank You!</h2>
      <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
        Your furniture assessment form has been submitted successfully.
        We will contact you shortly.
      </p>
      <Button 
        onClick={resetForm}
        className="apple-button focus-ring text-base px-8 py-3 mt-4"
      >
        Submit Another Assessment
      </Button>
    </div>
  );
};
