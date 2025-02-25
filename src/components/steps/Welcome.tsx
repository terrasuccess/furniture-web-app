
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';

export const Welcome = () => {
  const { setCurrentStep } = useFormStore();

  return (
    <div className="text-center space-y-6 w-full">
      <h2 className="text-2xl font-light mb-4 uppercase tracking-wide">Ready to sell your furniture?</h2>
      <p className="text-gray-600 mb-8 font-light">
        Please fill out this assessment form after discussing with us.<br />
        Have the necessary info and images ready.
      </p>
      <Button 
        onClick={() => setCurrentStep('basicInfo')}
        className="norr11-button"
      >
        Continue
      </Button>
    </div>
  );
};
