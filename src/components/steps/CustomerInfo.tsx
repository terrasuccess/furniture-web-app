
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';

export const CustomerInfo = () => {
  const { setCurrentStep, formData, updateFormData } = useFormStore();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Customer Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            value={formData.name || ''}
            onChange={(e) => updateFormData({ name: e.target.value })}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input
            type="text"
            value={formData.address || ''}
            onChange={(e) => updateFormData({ address: e.target.value })}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your address"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Postal Code
            </label>
            <input
              type="text"
              value={formData.postalCode || ''}
              onChange={(e) => updateFormData({ postalCode: e.target.value })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter postal code"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              value={formData.city || ''}
              onChange={(e) => updateFormData({ city: e.target.value })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter city"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              value={formData.phone || ''}
              onChange={(e) => updateFormData({ phone: e.target.value })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email || ''}
              onChange={(e) => updateFormData({ email: e.target.value })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter email"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Button
          onClick={() => setCurrentStep('basicInfo')}
          variant="outline"
        >
          Back
        </Button>
        <Button
          onClick={() => setCurrentStep('itemDescription')}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
