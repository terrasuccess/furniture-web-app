
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';

export const Welcome = () => {
  const { setCurrentStep } = useFormStore();

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Ready to sell your furniture?</h2>
      <p className="text-gray-600 mb-8">
        Please fill out this assessment form after discussing with us.<br />
        Have the necessary info and images ready.
      </p>
      <Button 
        onClick={() => setCurrentStep('basicInfo')}
        className="px-8 py-2"
      >
        Continue
      </Button>
    </div>
  );
};

