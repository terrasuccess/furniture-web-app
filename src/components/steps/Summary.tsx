
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';

export const Summary = () => {
  const { setCurrentStep, formData } = useFormStore();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Summary</h2>
      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Basic Information</h3>
          <p>Attachment Number: {formData.attachmentNumber}</p>
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
            <div key={index} className="mb-4 last:mb-0">
              <h4 className="font-medium">Item {index + 1}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Model: {item.model}</p>
              <p>Designer: {item.designer}</p>
              <p>Manufacturer: {item.manufacturer}</p>
              <p>Condition: {item.condition}</p>
              <p>Materials: {item.materials}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
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
