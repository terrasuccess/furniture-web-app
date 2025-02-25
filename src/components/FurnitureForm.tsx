
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
  const itemDescriptionRef = useRef<HTMLDivElement | null>(null);

  // Trigger animation on step change
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [currentStep]);

  // Use effect to measure the height of the ItemDescription step
  useEffect(() => {
    // Function to measure and set the height
    const measureItemDescriptionHeight = () => {
      if (itemDescriptionRef.current) {
        // Get the height of the ItemDescription step
        const height = itemDescriptionRef.current.scrollHeight;
        setCardHeight(height);
      }
    };

    // Measure after initial render and DOM is ready
    measureItemDescriptionHeight();

    // Force an immediate display of ItemDescription to measure its height
    const originalDisplay = itemDescriptionRef.current?.style.display;
    const originalVisibility = itemDescriptionRef.current?.style.visibility;
    const originalPosition = itemDescriptionRef.current?.style.position;
    
    if (itemDescriptionRef.current) {
      // Make it temporarily visible but not in the flow
      itemDescriptionRef.current.style.display = 'block';
      itemDescriptionRef.current.style.visibility = 'hidden';
      itemDescriptionRef.current.style.position = 'absolute';
    }
    
    // Use setTimeout to ensure DOM update
    setTimeout(() => {
      measureItemDescriptionHeight();
      
      // Restore original styles
      if (itemDescriptionRef.current) {
        itemDescriptionRef.current.style.display = originalDisplay || '';
        itemDescriptionRef.current.style.visibility = originalVisibility || '';
        itemDescriptionRef.current.style.position = originalPosition || '';
      }
    }, 0);

    // Recalculate if window resizes
    window.addEventListener('resize', measureItemDescriptionHeight);
    
    return () => {
      window.removeEventListener('resize', measureItemDescriptionHeight);
    };
  }, []);

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
          <div className={`${currentStep === 'welcome' ? 'block' : 'hidden'}`}>
            <Welcome />
          </div>
          <div className={`${currentStep === 'basicInfo' ? 'block' : 'hidden'}`}>
            <BasicInfo />
          </div>
          <div className={`${currentStep === 'customerInfo' ? 'block' : 'hidden'}`}>
            <CustomerInfo />
          </div>
          <div 
            ref={itemDescriptionRef} 
            className={`${currentStep === 'itemDescription' ? 'block' : 'hidden'}`}
          >
            <ItemDescription />
          </div>
          <div className={`${currentStep === 'signature' ? 'block' : 'hidden'}`}>
            <Signature />
          </div>
          <div className={`${currentStep === 'summary' ? 'block' : 'hidden'}`}>
            <Summary />
          </div>
          <div className={`${currentStep === 'confirmation' ? 'block' : 'hidden'}`}>
            <Confirmation />
          </div>
        </div>
      </div>
    </div>
  );
};
