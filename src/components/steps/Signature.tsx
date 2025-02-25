
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';

export const Signature = () => {
  const { setCurrentStep, formData, updateFormData } = useFormStore();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Signature</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Please sign here
        </label>
        <div className="border rounded-md p-4 h-40 bg-white">
          {/* Signature implementation will be added later */}
          <p className="text-gray-500 text-center">Signature pad will be implemented here</p>
        </div>
      </div>
      <div className="flex justify-between">
        <Button
          onClick={() => setCurrentStep('itemDescription')}
          variant="outline"
        >
          Back
        </Button>
        <Button
          onClick={() => setCurrentStep('summary')}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
