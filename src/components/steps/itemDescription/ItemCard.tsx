
import { Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../../ui/button';
import { ItemImageUpload } from './ItemImageUpload';
import { ItemFormFields } from './ItemFormFields';
import { useState } from 'react';

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
  collapsed: boolean;
  toggleCollapse: (index: number) => void;
}

export const ItemCard = ({ 
  index, 
  item, 
  updateItem, 
  removeItem, 
  handleImageUpload, 
  uploading, 
  totalItems,
  formatPrice,
  collapsed,
  toggleCollapse
}: ItemCardProps) => {
  return (
    <div className="p-4 border rounded-lg space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">Item {index + 1}</h3>
          {item.model && <span className="text-sm text-gray-600">- {item.model}</span>}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => toggleCollapse(index)}
            className="hover:bg-gray-100 p-1 h-auto"
          >
            {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </Button>
        </div>
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
      
      <div className={`transition-all duration-300 ${collapsed ? 'h-0 overflow-hidden opacity-0 m-0 p-0' : 'opacity-100'}`}>
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
    </div>
  );
};
