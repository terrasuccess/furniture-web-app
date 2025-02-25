
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';

export const Signature = () => {
  const { setCurrentStep, formData, updateFormData } = useFormStore();

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Signature</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Please sign here
        </label>
        <div className="border rounded-xl p-6 h-48 bg-white/90 shadow-inner">
          {/* Signature implementation will be added later */}
          <p className="text-gray-500 text-center pt-16">Signature pad will be implemented here</p>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <Button
          onClick={() => setCurrentStep('itemDescription')}
          variant="outline"
          className="focus-ring rounded-full px-6"
        >
          Back
        </Button>
        <Button
          onClick={() => setCurrentStep('summary')}
          className="apple-button focus-ring"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
