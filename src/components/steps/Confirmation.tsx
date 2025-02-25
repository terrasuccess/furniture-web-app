
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';
import { Check } from 'lucide-react';

export const Confirmation = () => {
  const { resetForm } = useFormStore();

  return (
    <div className="text-center space-y-8">
      <div className="flex justify-center">
        <div className="rounded-full bg-green-500 p-3">
          <Check className="w-6 h-6 text-white" />
        </div>
      </div>
      <h2 className="text-2xl font-light uppercase tracking-wide">Thank You</h2>
      <p className="text-gray-600 font-light">
        Your furniture assessment form has been submitted successfully.<br />
        We will contact you shortly.
      </p>
      <Button 
        onClick={resetForm}
        className="norr11-button mt-4"
      >
        Submit Another Assessment
      </Button>
    </div>
  );
};
