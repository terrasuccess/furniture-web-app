
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
  '/lovable-uploads/54cae882-9958-4715-a643-8dd89992d493.png',
  '/lovable-uploads/ce92d29a-f9bb-47b0-a6a3-36d4a209fa27.png',
  '/lovable-uploads/80231fdd-53c8-4705-a577-c18f497345c0.png'
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
