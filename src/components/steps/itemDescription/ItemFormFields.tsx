
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
    // Extract only numbers from the input
    const numericValue = parseInt(e.target.value.replace(/[^0-9]/g, '')) || 0;
    // Only update if the value is at least 0
    updateItem(index, 'price', numericValue);
  };

  // Format price as Danish currency without the currency symbol
  const formatPriceInput = (price: number) => {
    if (price === 0) return '';
    return new Intl.NumberFormat('da-DK', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price) + ' kr.';
  };

  // Condition options for the dropdown
  const conditionOptions = ["Perfect", "Good", "Okay", "Bad"];

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
            className="norr11-input appearance-none bg-transparent w-full"
            placeholder="Enter quantity"
            style={{ 
              WebkitAppearance: "none", 
              MozAppearance: "textfield",
              margin: 0
            }}
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
        <select
          value={item.condition}
          onChange={(e) => updateItem(index, 'condition', e.target.value)}
          className="norr11-input appearance-none bg-transparent w-full" 
          style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5 7.5L10 12.5L15 7.5\" stroke=\"%23666666\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>')", backgroundRepeat: "no-repeat", backgroundPosition: "right 0.7rem center", paddingRight: "2rem" }}
        >
          <option value="" disabled>Select condition</option>
          {conditionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
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
          value={formatPriceInput(item.price)}
          onChange={handlePriceChange}
          className="norr11-input"
          placeholder="Enter price in kr."
        />
      </div>
    </>
  );
};
