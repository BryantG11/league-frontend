// Components/ServiceItem.tsx
interface Service {
  id: string;
  icon: string;
  title: string;
  desc: string;
  price: number;
  time: number;
}

export interface ServiceItemProps {
  service: Service;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export const ServiceItem = ({ service, isSelected, onSelect }: ServiceItemProps) => (
  <label className={`selection-item ${isSelected ? 'selected' : ''}`}>
    <input
      type="radio"
      name="team-selection"
      value={service.id}
      checked={isSelected}
      onChange={() => onSelect(service.id)}
    />
    <div className="radio-custom"></div>
    <div className="icon-box">
      <img src={service.icon} alt={service.title} />
    </div>

    <div className="details-box">
      <div className="main-info">
        <span className="type">{service.title}</span>
        <span className="desc">{service.desc}</span>
        <span className="see-details">See details▸</span>
      </div>
      <div className="price-box">
        <span className="price">${service.price}/game</span>
        <span className="status">{service.time} min away</span>
      </div>
    </div>
  </label>
);