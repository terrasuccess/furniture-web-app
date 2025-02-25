
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';
import { Check } from 'lucide-react';

export const Confirmation = () => {
  const { resetForm } = useFormStore();

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="rounded-full bg-green-100 p-3">
          <Check className="w-8 h-8 text-green-600" />
        </div>
      </div>
      <h2 className="text-2xl font-semibold">Thank You!</h2>
      <p className="text-gray-600">
        Your furniture assessment form has been submitted successfully.
        We will contact you shortly.
      </p>
      <Button 
        onClick={resetForm}
        className="mt-4"
      >
        Submit Another Assessment
      </Button>
    </div>
  );
};
