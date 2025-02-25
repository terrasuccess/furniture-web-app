
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
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Summary</h2>
      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Basic Information</h3>
          <p>Attachment Number: {formData.attachmentNumber}</p>
          <p>Today's Date: {format(new Date(), 'yyyy-MM-dd')}</p>
          <p>Pickup Date: {formData.pickupDate}</p>
        </div>
        
        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Customer Information</h3>
          <p>Name: {formData.name}</p>
          <p>Address: {formData.address}</p>
          <p>Postal Code: {formData.postalCode}</p>
          <p>City: {formData.city}</p>
          <p>Phone: {formData.phone}</p>
          <p>Email: {formData.email}</p>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Items</h3>
          {formData.items.map((item, index) => (
            <div key={index} className="mb-6 last:mb-0 border-b last:border-b-0 pb-6 last:pb-0">
              <h4 className="font-medium">Item {index + 1}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {item.imageUrl && (
                  <div className="w-full">
                    <img
                      src={item.imageUrl}
                      alt={`Item ${index + 1}`}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
                <div>
                  <p>Quantity: {item.quantity}</p>
                  <p>Model: {item.model}</p>
                  <p>Designer: {item.designer}</p>
                  <p>Manufacturer: {item.manufacturer}</p>
                  <p>Condition: {item.condition}</p>
                  <p>Materials: {item.materials}</p>
                  <p>Price: {formatPrice(item.price)}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t">
            <p className="text-lg font-semibold">Total: {formatPrice(calculateTotal())}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Button
          onClick={() => setCurrentStep('signature')}
          variant="outline"
        >
          Back
        </Button>
        <Button
          onClick={() => setCurrentStep('confirmation')}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
