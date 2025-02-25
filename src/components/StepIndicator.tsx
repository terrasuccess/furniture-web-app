
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
  const [isHidden, setIsHidden] = useState(false);
  
  useEffect(() => {
    // When moving to confirmation, handle step indicator animation
    if (currentStep === 'confirmation') {
      // Start the collapse animation
      setIsCollapsed(true);
      
      // After the collapse animation completes, hide the component
      const timer = setTimeout(() => {
        setIsHidden(true);
      }, 500); // Match this with the CSS transition duration
      
      return () => clearTimeout(timer);
    } else {
      setIsCollapsed(false);
      setIsHidden(false);
    }
  }, [currentStep]);

  const getCurrentStepIndex = () => {
    // If we're on the summary step or confirmation, consider all previous steps complete
    if (currentStep === 'summary' || currentStep === 'confirmation') {
      return steps.length;
    }
    return steps.findIndex(s => s.step === currentStep);
  };

  if (isHidden) {
    return null;
  }

  return (
    <div 
      className={`flex justify-between transition-all duration-500 step-indicator ${isCollapsed ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
    >
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
