
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';

export const CustomerInfo = () => {
  const { setCurrentStep, formData, updateFormData } = useFormStore();

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-light text-center uppercase tracking-wide mb-8">Customer Information</h2>
      <div className="space-y-6">
        <div>
          <label className="norr11-label">
            Name
          </label>
          <input
            type="text"
            value={formData.name || ''}
            onChange={(e) => updateFormData({ name: e.target.value })}
            className="norr11-input"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="norr11-label">
            Address
          </label>
          <input
            type="text"
            value={formData.address || ''}
            onChange={(e) => updateFormData({ address: e.target.value })}
            className="norr11-input"
            placeholder="Enter your address"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="norr11-label">
              Postal Code
            </label>
            <input
              type="text"
              value={formData.postalCode || ''}
              onChange={(e) => updateFormData({ postalCode: e.target.value })}
              className="norr11-input"
              placeholder="Enter postal code"
            />
          </div>
          <div>
            <label className="norr11-label">
              City
            </label>
            <input
              type="text"
              value={formData.city || ''}
              onChange={(e) => updateFormData({ city: e.target.value })}
              className="norr11-input"
              placeholder="Enter city"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="norr11-label">
              Phone
            </label>
            <input
              type="tel"
              value={formData.phone || ''}
              onChange={(e) => updateFormData({ phone: e.target.value })}
              className="norr11-input"
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <label className="norr11-label">
              Email
            </label>
            <input
              type="email"
              value={formData.email || ''}
              onChange={(e) => updateFormData({ email: e.target.value })}
              className="norr11-input"
              placeholder="Enter email"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-8">
        <Button
          onClick={() => setCurrentStep('basicInfo')}
          variant="outline"
          className="norr11-button-outline"
        >
          Back
        </Button>
        <Button
          onClick={() => setCurrentStep('itemDescription')}
          className="norr11-button"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
