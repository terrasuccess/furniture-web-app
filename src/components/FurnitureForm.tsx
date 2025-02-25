
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
  '/lovable-uploads/68f839ee-1702-48ff-bae8-8d25fce3dec8.png',
  '/lovable-uploads/b21b5016-2d67-4f8f-a12f-7520ed982c46.png',
  '/lovable-uploads/6eae26e8-19ad-417c-970c-a2859c943ccf.png'
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
        className="fixed inset-0 z-0"
        style={{ 
          backgroundImage: `url("${backgroundImages[currentImageIndex]}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)',
          transform: 'scale(1.1)',
          transition: 'background-image 1s ease-in-out'
        }}
      />
      {/* Semi-transparent overlay */}
      <div className="fixed inset-0 bg-white/30 z-0" />
      
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
