
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';
import { format } from 'date-fns';

export const Summary = () => {
  const { setCurrentStep, formData } = useFormStore();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('da-DK', {
      style: 'currency',
      currency: 'DKK',
    }).format(price);
  };

  const calculateTotal = () => {
    return formData.items.reduce((sum, item) => sum + (item.price || 0), 0);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-light text-center uppercase tracking-wide mb-8">Summary</h2>
      <div className="space-y-6">
        <div className="pb-4 border-b border-gray-200">
          <h3 className="text-sm uppercase tracking-wider mb-4">Basic Information</h3>
          <p className="font-light">Document Number: <span className="font-normal">{formData.attachmentNumber}</span></p>
          <p className="font-light">Today's Date: <span className="font-normal">{format(new Date(), 'dd-MM-yyyy')}</span></p>
          <p className="font-light">Pickup Date: <span className="font-normal">{formData.pickupDate ? format(new Date(formData.pickupDate), 'dd-MM-yyyy') : ''}</span></p>
        </div>
        
        <div className="pb-4 border-b border-gray-200">
          <h3 className="text-sm uppercase tracking-wider mb-4">Customer Information</h3>
          <p className="font-light">Name: <span className="font-normal">{formData.name}</span></p>
          <p className="font-light">Address: <span className="font-normal">{formData.address}</span></p>
          <p className="font-light">Postal Code: <span className="font-normal">{formData.postalCode}</span></p>
          <p className="font-light">City: <span className="font-normal">{formData.city}</span></p>
          <p className="font-light">Phone: <span className="font-normal">{formData.phone}</span></p>
          <p className="font-light">Email: <span className="font-normal">{formData.email}</span></p>
        </div>

        <div className="pb-4 border-b border-gray-200">
          <h3 className="text-sm uppercase tracking-wider mb-4">Items</h3>
          {formData.items.map((item, index) => (
            <div key={index} className="mb-8 last:mb-0 border-b last:border-b-0 pb-6 last:pb-0">
              <h4 className="text-sm uppercase tracking-wider">Item {index + 1}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {item.imageUrl && (
                  <div className="w-full">
                    <img
                      src={item.imageUrl}
                      alt={`Item ${index + 1}`}
                      className="w-32 h-32 object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-light">Quantity: <span className="font-normal">{item.quantity}</span></p>
                  <p className="font-light">Model: <span className="font-normal">{item.model}</span></p>
                  <p className="font-light">Designer: <span className="font-normal">{item.designer}</span></p>
                  <p className="font-light">Manufacturer: <span className="font-normal">{item.manufacturer}</span></p>
                  <p className="font-light">Condition: <span className="font-normal">{item.condition}</span></p>
                  <p className="font-light">Materials: <span className="font-normal">{item.materials}</span></p>
                  <p className="font-light">Price: <span className="font-normal">{formatPrice(item.price)}</span></p>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm uppercase tracking-wider">Total: <span>{formatPrice(calculateTotal())}</span></p>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-8">
        <Button
          onClick={() => setCurrentStep('signature')}
          variant="outline"
          className="norr11-button-outline"
        >
          Back
        </Button>
        <Button
          onClick={() => setCurrentStep('confirmation')}
          className="norr11-button"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
