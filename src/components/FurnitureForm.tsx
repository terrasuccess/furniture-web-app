
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/02270f18-85d3-40ce-a0ce-a9f1321e0333.png" 
            alt="Klassik Logo" 
            className="h-12 mx-auto mb-8"
          />
          <StepIndicator />
        </div>

        <div className="glass-card rounded-2xl p-8 transition-all duration-500 form-appear">
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
