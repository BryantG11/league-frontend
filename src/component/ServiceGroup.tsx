import { ServiceItem, type ServiceItemProps } from "./ServiceItem";
import { SERVICES } from "../types";

export const ServiceGroup: React.FC<{ label: string, services: ServiceItemProps[], selectedMode: string, onSelect: (id: string) => void }> = ({ label, services, selectedMode, onSelect }) => (
<>
    <p className="label">{label}</p>
    {services.map((service) => (
        <ServiceItem
            key={service.id}
            service={service}
            isSelected={selectedMode === service.id}
            onSelect={onSelect}
        />
    ))}
</>
);