import "./DataRecoveryServices.scss"
import PricingCard from "./PricingCard";

const PricingPage = () => {
    const hardDriveServices = [
        { name: "Basic Recovery", price: "$85 - $125", description: "includes file transfers, backups, partition corruption, software corruption", dots: 90 },
        { name: "Standard Recovery", price: "$125 - $250", description: "includes bypassing lightly failing hardware to recover files", dots: 76 },
        { name: "Advanced Recovery", price: "$250 - $500", description: "includes repairing physically failing hardware to recovery files", dots: 69 },
        { name: "Lab Recovery", price: "$950+", description: "includes replacing mechanically failed parts from 1TB - 4TB drives", dots: 113 }
    ];

    const thumbDriveServices = [
        { name: "Basic Recovery", price: "$85 - $150", description: "partition corruption, software corruption, lightly physically failing", dots: 94 },
        { name: "Standard Recovery", price: "$250", description: "directly repairing damaged parts", dots: 95 },
        { name: "Hardware Recovery", price: "$250 - $500", description: "replacing mechanically failed parts", dots: 78 }
    ];

    const RaidServerServices = [    
        { name: "RAID/Server/NAS Lab Standard Recovery", price: "$250 - $750", description: "applies to bypassing lightly failing hardware to recover files", dots: 25 },
        { name: "RAID / Server / NAS Lab Recovery", price: "$950", description: "applies to each physically damaged drive", dots: 65 },
        { name: "Solid State Drive (SSD) Standard Recovery", price: "$125 - $500", description: "includes bypassing lightly failing hardware to recover files", dots: 24 },
        { name: "Solid State Drive (SSD) Lab Recovery", price: "$1,250+", description: "range is on higher end if encryption needs to be decrypted", dots: 48 }
    ]

    const phoneServices = [    
        { name: "File Backup", price: "$85", description: "includes no physical damage, phone fully working", dots: 135 },
        { name: "Standard Recovery", price: "$125 - $250", description: "includes software corruption, start-up issue", dots: 92 },
        { name: "Hardware Recovery", price: "$250 - $450", description: "liquid spills, drops, physical damage, repair / replace failed parts", dots: 85 },
    ]

    return (
        <div className="dataPricingContainer">
        <h2 className="dataPricingTitle">Data Recovery Pricing</h2>
        <div className="cardDataContainerClasses">
            <PricingCard title="Hard Drive" services={hardDriveServices} />
            <PricingCard title="USB Thumb Drive" services={thumbDriveServices} />
            <PricingCard title="RAID - Server - NAS - SSD" services={RaidServerServices} />
            <PricingCard title="Phone - Tablet" services={phoneServices} />
        </div>
        </div>
    );
};

export default PricingPage;