
import { useEffect } from 'react';
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';
import { format } from 'date-fns';

export const BasicInfo = () => {
  const { setCurrentStep, formData, updateFormData } = useFormStore();

  useEffect(() => {
    // Generate document number if not already set
    if (!formData.attachmentNumber) {
      const timestamp = Date.now();
      const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      const documentNumber = `DOC-${timestamp}-${randomNum}`;
      updateFormData({ attachmentNumber: documentNumber });
    }
  }, []);

  const todayDate = format(new Date(), 'yyyy-MM-dd');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Basic Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Document Number
          </label>
          <input
            type="text"
            value={formData.attachmentNumber || ''}
            readOnly
            className="w-full p-2 border rounded-md bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Today's Date
          </label>
          <input
            type="date"
            value={todayDate}
            readOnly
            className="w-full p-2 border rounded-md bg-gray-50"
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
