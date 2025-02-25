
import { Trash2 } from 'lucide-react';
import { Button } from '../../ui/button';
import { ItemImageUpload } from './ItemImageUpload';
import { ItemFormFields } from './ItemFormFields';

interface ItemCardProps {
  index: number;
  item: {
    quantity: number;
    model: string;
    designer: string;
    manufacturer: string;
    condition: string;
    materials: string;
    price: number;
    imageUrl?: string;
  };
  updateItem: (index: number, field: string, value: string | number) => void;
  removeItem: (index: number) => void;
  handleImageUpload: (index: number, file: File) => Promise<void>;
  uploading: boolean;
  totalItems: number;
  formatPrice: (price: number) => string;
}

export const ItemCard = ({ 
  index, 
  item, 
  updateItem, 
  removeItem, 
  handleImageUpload, 
  uploading, 
  totalItems,
  formatPrice
}: ItemCardProps) => {
  return (
    <div className="p-4 border rounded-lg space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Item {index + 1}</h3>
        {totalItems > 1 && (
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
      
      <ItemImageUpload 
        index={index}
        imageUrl={item.imageUrl}
        handleImageUpload={handleImageUpload}
        uploading={uploading}
      />

      <ItemFormFields 
        index={index}
        item={item}
        updateItem={updateItem}
        formatPrice={formatPrice}
      />
    </div>
  );
};
