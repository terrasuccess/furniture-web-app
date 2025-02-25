
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
    <div className="space-y-8">
      <h2 className="text-2xl font-light text-center uppercase tracking-wide mb-8">Basic Information</h2>
      <div className="space-y-6">
        <div>
          <label className="norr11-label">
            Document Number
          </label>
          <input
            type="text"
            value={formData.attachmentNumber || ''}
            readOnly
            className="norr11-input bg-gray-100"
          />
        </div>
        <div>
          <label className="norr11-label">
            Today's Date
          </label>
          <input
            type="date"
            value={todayDate}
            readOnly
            className="norr11-input bg-gray-100"
          />
        </div>
        <div>
          <label className="norr11-label">
            Pickup Date
          </label>
          <input
            type="date"
            value={formData.pickupDate || ''}
            onChange={(e) => updateFormData({ pickupDate: e.target.value })}
            className="norr11-input"
          />
        </div>
      </div>
      <div className="flex justify-between pt-8">
        <Button
          onClick={() => setCurrentStep('welcome')}
          variant="outline"
          className="norr11-button-outline"
        >
          Back
        </Button>
        <Button
          onClick={() => setCurrentStep('customerInfo')}
          className="norr11-button"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
