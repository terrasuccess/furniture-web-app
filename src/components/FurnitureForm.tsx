
import { useFormStore } from '../store/formStore';
import { Welcome } from './steps/Welcome';
import { BasicInfo } from './steps/BasicInfo';
import { CustomerInfo } from './steps/CustomerInfo';
import { ItemDescription } from './steps/ItemDescription';
import { Signature } from './steps/Signature';
import { Summary } from './steps/Summary';
import { Confirmation } from './steps/Confirmation';
import { StepIndicator } from './StepIndicator';
import { useEffect, useState, useRef } from 'react';

export const FurnitureForm = () => {
  const { currentStep } = useFormStore();
  const [key, setKey] = useState(0);
  const [cardHeight, setCardHeight] = useState<number | null>(null);
  const cardRefs = useRef<{[key: string]: HTMLDivElement | null}>({
    welcome: null,
    basicInfo: null,
    customerInfo: null,
    itemDescription: null,
    signature: null,
    summary: null,
    confirmation: null
  });

  // Trigger animation on step change
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [currentStep]);

  // Determine the maximum height after initial render and window resize
  useEffect(() => {
    const calculateMaxHeight = () => {
      const heights = Object.values(cardRefs.current)
        .filter(Boolean)
        .map(el => el?.scrollHeight || 0);
      
      if (heights.length > 0) {
        const maxHeight = Math.max(...heights);
        setCardHeight(maxHeight);
      }
    };

    // Calculate after initial render and DOM is ready
    calculateMaxHeight();

    // Recalculate if window resizes
    window.addEventListener('resize', calculateMaxHeight);
    
    return () => {
      window.removeEventListener('resize', calculateMaxHeight);
    };
  }, []);

  // Function to register refs for each content div
  const registerRef = (step: string, el: HTMLDivElement | null) => {
    cardRefs.current[step] = el;
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
      {/* Background image with overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/881d91c6-dbb1-44d9-8170-63d3458a3312.png")',
          backgroundAttachment: 'fixed',
          // Scale up the background to avoid blur edges
          transform: 'scale(1.1)',
          // Ensure the background covers the entire viewport
          width: '100vw',
          height: '100vh',
          // Center the background
          left: 0,
          top: 0,
          filter: 'brightness(1.05) contrast(0.95)'
        }}
      />
      {/* White overlay with reduced opacity (10%) */}
      <div className="fixed inset-0 bg-white/10" />
      
      {/* Content */}
      <div className="w-full max-w-3xl relative z-10">
        <div className="mb-12">
          <div>
            <img 
              src="/lovable-uploads/02270f18-85d3-40ce-a0ce-a9f1321e0333.png" 
              alt="Klassik Logo" 
              className="h-16 mx-auto mb-12"
            />
          </div>
          <StepIndicator />
        </div>

        <div 
          key={key} 
          className="glass-card rounded-none p-8 md:p-12 transition-all duration-500 form-appear"
          style={{ minHeight: cardHeight ? `${cardHeight}px` : 'auto' }}
        >
          <div 
            ref={(el) => registerRef('welcome', el)} 
            className={`${currentStep === 'welcome' ? 'block' : 'hidden'}`}
          >
            <Welcome />
          </div>
          <div 
            ref={(el) => registerRef('basicInfo', el)} 
            className={`${currentStep === 'basicInfo' ? 'block' : 'hidden'}`}
          >
            <BasicInfo />
          </div>
          <div 
            ref={(el) => registerRef('customerInfo', el)} 
            className={`${currentStep === 'customerInfo' ? 'block' : 'hidden'}`}
          >
            <CustomerInfo />
          </div>
          <div 
            ref={(el) => registerRef('itemDescription', el)} 
            className={`${currentStep === 'itemDescription' ? 'block' : 'hidden'}`}
          >
            <ItemDescription />
          </div>
          <div 
            ref={(el) => registerRef('signature', el)} 
            className={`${currentStep === 'signature' ? 'block' : 'hidden'}`}
          >
            <Signature />
          </div>
          <div 
            ref={(el) => registerRef('summary', el)} 
            className={`${currentStep === 'summary' ? 'block' : 'hidden'}`}
          >
            <Summary />
          </div>
          <div 
            ref={(el) => registerRef('confirmation', el)} 
            className={`${currentStep === 'confirmation' ? 'block' : 'hidden'}`}
          >
            <Confirmation />
          </div>
        </div>
      </div>
    </div>
  );
};
