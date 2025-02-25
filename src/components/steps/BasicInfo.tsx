
import { useEffect } from 'react';
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';

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
            disabled
            className="norr11-input bg-gray-100 cursor-not-allowed opacity-75"
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
            disabled
            className="norr11-input bg-gray-100 cursor-not-allowed opacity-75"
          />
        </div>
        <div className="relative">
          <label className="norr11-label">
            Pickup Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={formData.pickupDate || ''}
              onChange={(e) => updateFormData({ pickupDate: e.target.value })}
              className="norr11-input pr-10 cursor-pointer"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
              <Calendar size={18} />
            </div>
          </div>
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
