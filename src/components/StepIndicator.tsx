
import { useFormStore } from '../store/formStore';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

const steps = [
  { title: 'WELCOME', step: 'welcome' },
  { title: 'BASIC INFO', step: 'basicInfo' },
  { title: 'CUSTOMER INFO', step: 'customerInfo' },
  { title: 'ITEMS', step: 'itemDescription' },
  { title: 'SIGNATURE', step: 'signature' },
  { title: 'SUMMARY', step: 'summary' }
] as const;

export const StepIndicator = () => {
  const { currentStep } = useFormStore();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  useEffect(() => {
    // When moving to confirmation, trigger the collapse animation
    if (currentStep === 'confirmation') {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [currentStep]);

  const getCurrentStepIndex = () => {
    // If we're on the summary step or confirmation, consider all previous steps complete
    if (currentStep === 'summary' || currentStep === 'confirmation') {
      return steps.length;
    }
    return steps.findIndex(s => s.step === currentStep);
  };

  return (
    <div className={`flex justify-between step-indicator ${isCollapsed ? 'collapsed' : ''}`}>
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
                <Check className="w-4 h-4" />
              ) : (
                i + 1
              )}
            </div>
            <p className="step-text">{step.title}</p>
          </div>
        );
      })}
    </div>
  );
};
