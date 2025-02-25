
import { useFormStore } from '../store/formStore';
import { Welcome } from './steps/Welcome';
import { BasicInfo } from './steps/BasicInfo';
import { CustomerInfo } from './steps/CustomerInfo';
import { ItemDescription } from './steps/ItemDescription';
import { Signature } from './steps/Signature';
import { Summary } from './steps/Summary';
import { Confirmation } from './steps/Confirmation';
import { StepIndicator } from './StepIndicator';
import { useEffect, useState } from 'react';

export const FurnitureForm = () => {
  const { currentStep } = useFormStore();
  const [key, setKey] = useState(0);

  // Trigger animation on step change
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [currentStep]);

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
          style={{ minHeight: '320px' }} // Add a minimum height to prevent content jumping
        >
          <div className="flex justify-center items-center h-full">
            {currentStep === 'welcome' && <Welcome />}
            {currentStep === 'basicInfo' && <BasicInfo />}
            {currentStep === 'customerInfo' && <CustomerInfo />}
            {currentStep === 'itemDescription' && <ItemDescription />}
            {currentStep === 'signature' && <Signature />}
            {currentStep === 'summary' && <Summary />}
            {currentStep === 'confirmation' && <Confirmation />}
          </div>
        </div>
      </div>
    </div>
  );
};
