
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
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Extract only the numeric value from the input
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    updateItem(index, 'price', parseInt(numericValue) || 0);
  };

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
            placeholder="Enter quantity"
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
            placeholder="Enter model name"
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
            placeholder="Enter designer name"
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
            placeholder="Enter manufacturer name"
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
          placeholder="Describe item condition"
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
          placeholder="List materials used"
        />
      </div>
      <div>
        <label className="norr11-label">
          Price (DKK)
        </label>
        <input
          type="text"
          value={item.price > 0 ? formatPrice(item.price) : ''}
          onChange={handlePriceChange}
          className="norr11-input"
          placeholder="Enter price in kr."
        />
      </div>
    </>
  );
};
