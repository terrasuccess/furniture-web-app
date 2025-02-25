
import { useFormStore } from '../../store/formStore';
import { Button } from '../ui/button';
import { Plus, Upload, Trash2 } from 'lucide-react';
import { useState } from 'react';

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

  const calculateTotal = () => {
    return formData.items.reduce((sum, item) => sum + (item.price || 0), 0);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('da-DK', {
      style: 'currency',
      currency: 'DKK',
    }).format(price);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center">Item Description</h2>
      <div className="space-y-6">
        {formData.items.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Item {index + 1}</h3>
              {formData.items.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeItem(index)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Item Image
              </label>
              <div className="flex items-center gap-4">
                {item.imageUrl ? (
                  <div className="relative w-24 h-24">
                    <img
                      src={item.imageUrl}
                      alt={`Item ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => e.target.files && handleImageUpload(index, e.target.files[0])}
                      className="hidden"
                      id={`image-upload-${index}`}
                    />
                    <label
                      htmlFor={`image-upload-${index}`}
                      className="absolute inset-0 flex items-center justify-center bg-black/50 text-white rounded-lg opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      Change
                    </label>
                  </div>
                ) : (
                  <div className="w-24">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => e.target.files && handleImageUpload(index, e.target.files[0])}
                      className="hidden"
                      id={`image-upload-${index}`}
                    />
                    <label
                      htmlFor={`image-upload-${index}`}
                      className="flex flex-col items-center justify-center w-24 h-24 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <Upload className="w-6 h-6 text-gray-400" />
                      <span className="text-xs text-gray-500">Upload</span>
                    </label>
                  </div>
                )}
                {uploading[index] && <span className="text-sm text-gray-500">Uploading...</span>}
              </div>
            </div>

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
                Price (DKK)
              </label>
              <input
                type="number"
                value={item.price}
                onChange={(e) => updateItem(index, 'price', parseInt(e.target.value) || 0)}
                className="w-full p-2 border rounded-md"
                placeholder="0 DKK"
              />
              <div className="text-sm text-gray-500 mt-1">
                {formatPrice(item.price)}
              </div>
            </div>
          </div>
        ))}
        
        <div className="flex justify-between items-center py-4 border-t">
          <div className="text-lg font-semibold">
            Total: {formatPrice(calculateTotal())}
          </div>
          <Button
            onClick={addItem}
            variant="outline"
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

