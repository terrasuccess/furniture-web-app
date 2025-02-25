
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';

export const BasicInfo = () => {
  const { setCurrentStep, formData, updateFormData } = useFormStore();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Basic Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Attachment Number
          </label>
          <input
            type="text"
            value={formData.attachmentNumber || ''}
            onChange={(e) => updateFormData({ attachmentNumber: e.target.value })}
            className="w-full p-2 border rounded-md"
            placeholder="Enter attachment number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pickup Date
          </label>
          <input
            type="date"
            value={formData.pickupDate || ''}
            onChange={(e) => updateFormData({ pickupDate: e.target.value })}
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <Button
          onClick={() => setCurrentStep('welcome')}
          variant="outline"
        >
          Back
        </Button>
        <Button
          onClick={() => setCurrentStep('customerInfo')}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
