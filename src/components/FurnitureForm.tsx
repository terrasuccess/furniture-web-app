
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

const backgroundImages = [
  '/lovable-uploads/881d91c6-dbb1-44d9-8170-63d3458a3312.png',
  '/lovable-uploads/2719c733-2530-47ff-b928-908991e931ed.png',
  '/lovable-uploads/06a1c54c-6c61-4c22-81b3-ff22b6d58c4e.png',
  '/lovable-uploads/de38ef74-8026-46ac-8add-64df992674b4.png',
  '/lovable-uploads/0e66d243-1832-4a39-8444-0d0105321370.png'
];

export const FurnitureForm = () => {
  const { currentStep } = useFormStore();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
      {/* Background image with blur and overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat blur-sm transition-all duration-1000"
        style={{ 
          backgroundImage: `url("${backgroundImages[currentImageIndex]}")`,
          backgroundAttachment: 'fixed'
        }}
      />
      {/* White overlay with increased opacity */}
      <div className="fixed inset-0 bg-white/10" />
      
      {/* Content */}
      <div className="w-full max-w-4xl relative z-10">
        <div className="mb-8">
          <div className="mix-blend-exclusion">
            <img 
              src="/lovable-uploads/02270f18-85d3-40ce-a0ce-a9f1321e0333.png" 
              alt="Klassik Logo" 
              className="h-20 mx-auto mb-8 brightness-200 contrast-200"
            />
          </div>
          <StepIndicator />
        </div>

        <div className="glass-card rounded-2xl p-8 transition-all duration-500 form-appear backdrop-blur-lg bg-white/80">
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
  );
};
