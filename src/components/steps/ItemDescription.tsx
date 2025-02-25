
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { ItemCard } from './itemDescription/ItemCard';
import { calculateTotal, formatPrice } from './itemDescription/utils';

export const ItemDescription = () => {
  const { setCurrentStep, formData, updateFormData, addItem, removeItem } = useFormStore();
  const [uploading, setUploading] = useState<{ [key: number]: boolean }>({});

  const updateItem = (index: number, field: string, value: string | number) => {
    const newItems = [...formData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    updateFormData({ items: newItems });
  };

  const handleImageUpload = async (index: number, file: File) => {
    if (!file) return;
    setUploading({ ...uploading, [index]: true });
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      updateItem(index, 'imageUrl', data.url);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading({ ...uploading, [index]: false });
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Item Description</h2>
      <div className="space-y-6">
        {formData.items.map((item, index) => (
          <ItemCard
            key={index}
            index={index}
            item={item}
            updateItem={updateItem}
            removeItem={removeItem}
            handleImageUpload={handleImageUpload}
            uploading={uploading[index] || false}
            totalItems={formData.items.length}
            formatPrice={formatPrice}
          />
        ))}
        
        <div className="flex justify-between items-center py-4 border-t">
          <div className="text-lg font-semibold">
            Total: {formatPrice(calculateTotal(formData.items))}
          </div>
          <Button
            onClick={addItem}
            variant="outline"
            className="norr11-button-outline"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Another Item
          </Button>
        </div>
      </div>
      <div className="flex justify-between">
        <Button
          onClick={() => setCurrentStep('customerInfo')}
          variant="outline"
          className="norr11-button-outline"
        >
          Back
        </Button>
        <Button
          onClick={() => setCurrentStep('signature')}
          className="norr11-button"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
