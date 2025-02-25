
import { useFormStore } from '../store/formStore';
import { Check } from 'lucide-react';

const steps = [
  { title: 'Welcome', step: 'welcome' },
  { title: 'Basic Info', step: 'basicInfo' },
  { title: 'Customer Info', step: 'customerInfo' },
  { title: 'Items', step: 'itemDescription' },
  { title: 'Signature', step: 'signature' },
  { title: 'Summary', step: 'summary' }
] as const;

export const StepIndicator = () => {
  const { currentStep } = useFormStore();
  
  const getCurrentStepIndex = () => {
    // If we're on the summary step, consider all previous steps complete
    if (currentStep === 'summary' || currentStep === 'confirmation') {
      return steps.length;
    }
    return steps.findIndex(s => s.step === currentStep);
  };

  return (
    <div className="flex justify-between">
      {steps.map((step, i) => {
        const currentIndex = getCurrentStepIndex();
        const isComplete = i < currentIndex;
        const isActive = i === currentIndex && currentStep !== 'summary' && currentStep !== 'confirmation';
        
        return (
          <div 
            key={step.step}
            className={`step-item ${isComplete ? 'complete' : ''} ${isActive ? 'active' : ''}`}
          >
            <div className="step">
              {isComplete ? (
                <Check className="w-6 h-6" />
              ) : (
                i + 1
              )}
            </div>
            <p className="text-xs mt-2">{step.title}</p>
          </div>
        );
      })}
    </div>
  );
};
