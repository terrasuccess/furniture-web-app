
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';

export const Welcome = () => {
  const { setCurrentStep } = useFormStore();

  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl font-semibold tracking-tight mb-4">Ready to sell your furniture?</h2>
      <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md mx-auto">
        Please fill out this assessment form after discussing with us.<br />
        Have the necessary information and images ready.
      </p>
      <Button 
        onClick={() => setCurrentStep('basicInfo')}
        className="apple-button focus-ring text-base px-8 py-3"
      >
        Get Started
      </Button>
    </div>
  );
};
