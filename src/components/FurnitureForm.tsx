
import { useFormStore } from '../store/formStore';
import { Welcome } from './steps/Welcome';
import { BasicInfo } from './steps/BasicInfo';
import { CustomerInfo } from './steps/CustomerInfo';
import { ItemDescription } from './steps/ItemDescription';
import { Signature } from './steps/Signature';
import { Summary } from './steps/Summary';
import { Confirmation } from './steps/Confirmation';
import { StepIndicator } from './StepIndicator';

export const FurnitureForm = () => {
  const { currentStep } = useFormStore();

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-4"
      style={{ 
        backgroundImage: 'url("/lovable-uploads/881d91c6-dbb1-44d9-8170-63d3458a3312.png")',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/02270f18-85d3-40ce-a0ce-a9f1321e0333.png" 
            alt="Klassik Logo" 
            className="h-20 mx-auto mb-8" // Increased from h-12 to h-20
          />
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
