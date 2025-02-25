
interface ItemFormFieldsProps {
  index: number;
  item: {
    quantity: number;
    model: string;
    designer: string;
    manufacturer: string;
    condition: string;
    materials: string;
    price: number;
  };
  updateItem: (index: number, field: string, value: string | number) => void;
  formatPrice: (price: number) => string;
}

export const ItemFormFields = ({ index, item, updateItem, formatPrice }: ItemFormFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="norr11-label">
            Quantity
          </label>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 0)}
            className="norr11-input"
          />
        </div>
        <div>
          <label className="norr11-label">
            Model
          </label>
          <input
            type="text"
            value={item.model}
            onChange={(e) => updateItem(index, 'model', e.target.value)}
            className="norr11-input"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="norr11-label">
            Designer
          </label>
          <input
            type="text"
            value={item.designer}
            onChange={(e) => updateItem(index, 'designer', e.target.value)}
            className="norr11-input"
          />
        </div>
        <div>
          <label className="norr11-label">
            Manufacturer
          </label>
          <input
            type="text"
            value={item.manufacturer}
            onChange={(e) => updateItem(index, 'manufacturer', e.target.value)}
            className="norr11-input"
          />
        </div>
      </div>
      <div>
        <label className="norr11-label">
          Condition
        </label>
        <input
          type="text"
          value={item.condition}
          onChange={(e) => updateItem(index, 'condition', e.target.value)}
          className="norr11-input"
        />
      </div>
      <div>
        <label className="norr11-label">
          Materials
        </label>
        <input
          type="text"
          value={item.materials}
          onChange={(e) => updateItem(index, 'materials', e.target.value)}
          className="norr11-input"
        />
      </div>
      <div>
        <label className="norr11-label">
          Price (DKK)
        </label>
        <input
          type="number"
          value={item.price}
          onChange={(e) => updateItem(index, 'price', parseInt(e.target.value) || 0)}
          className="norr11-input"
          placeholder="0 DKK"
        />
        <div className="text-sm text-gray-500 mt-1">
          {formatPrice(item.price)}
        </div>
      </div>
    </>
  );
};
