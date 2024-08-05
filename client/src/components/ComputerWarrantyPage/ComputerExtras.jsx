
import "./ComputerWarrantyPage.scss"
import ComputerExtraCards from "./ComputerExtraCards";

const PricingPage = () => {
    const hardDriveServices = [
        { name: "Email / Outlook Specialist", 
        price: "$100/month", 
        description: "Includes: send/receive fixes, migrations, set-ups, and configurations", 
        dots: 200 },
        { name: "Onsite Tech Maintenance", 
        price: "$150/month", 
        description: "Includes: 1 monthly periodic onsite visit for preventative maintenance, tune-up, Internet / network optimization, security / file backup checks.", 
        dots: 195 },
        { name: "Website Specialist", 
        price: "$150/month", 
        description: "Site edits, malware removal / security protection, page setups, optimization", 
        dots: 210 },
    ];

    return (
        <div className="ComputerExtrasContainer">
        <div className="ComputerExtrasCardData">
            <ComputerExtraCards title="Extras:" services={hardDriveServices} />
        </div>
        </div>
    );
};

export default PricingPage;