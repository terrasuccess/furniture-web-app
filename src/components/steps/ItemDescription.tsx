
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

export const ItemDescription = () => {
  const { setCurrentStep, formData, updateFormData, addItem } = useFormStore();

  const updateItem = (index: number, field: string, value: string | number) => {
    const newItems = [...formData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    updateFormData({ items: newItems });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Item Description</h2>
      <div className="space-y-6">
        {formData.items.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg space-y-4">
            <h3 className="font-medium">Item {index + 1}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 0)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Model
                </label>
                <input
                  type="text"
                  value={item.model}
                  onChange={(e) => updateItem(index, 'model', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Designer
                </label>
                <input
                  type="text"
                  value={item.designer}
                  onChange={(e) => updateItem(index, 'designer', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Manufacturer
                </label>
                <input
                  type="text"
                  value={item.manufacturer}
                  onChange={(e) => updateItem(index, 'manufacturer', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Condition
              </label>
              <input
                type="text"
                value={item.condition}
                onChange={(e) => updateItem(index, 'condition', e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Materials
              </label>
              <input
                type="text"
                value={item.materials}
                onChange={(e) => updateItem(index, 'materials', e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                type="number"
                value={item.price}
                onChange={(e) => updateItem(index, 'price', parseInt(e.target.value) || 0)}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>
        ))}
        <Button
          onClick={addItem}
          variant="outline"
          className="w-full"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Another Item
        </Button>
      </div>
      <div className="flex justify-between">
        <Button
          onClick={() => setCurrentStep('customerInfo')}
          variant="outline"
        >
          Back
        </Button>
        <Button
          onClick={() => setCurrentStep('signature')}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
