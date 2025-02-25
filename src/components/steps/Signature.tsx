
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';

export const Signature = () => {
  const { setCurrentStep, formData, updateFormData } = useFormStore();

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-light text-center uppercase tracking-wide mb-8">Signature</h2>
      <div>
        <label className="norr11-label">
          Please sign here
        </label>
        <div className="border-b border-gray-300 p-4 h-40 bg-transparent">
          {/* Signature implementation will be added later */}
          <p className="text-gray-500 text-center font-light">Signature pad will be implemented here</p>
        </div>
      </div>
      <div className="flex justify-between pt-8">
        <Button
          onClick={() => setCurrentStep('itemDescription')}
          variant="outline"
          className="norr11-button-outline"
        >
          Back
        </Button>
        <Button
          onClick={() => setCurrentStep('summary')}
          className="norr11-button"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
