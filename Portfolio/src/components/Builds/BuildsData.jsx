import Image1 from "../../assets/laptop.jpg";
import Image2 from "../../assets/intel.avif";
import Image3 from "../../assets/pc.avif";
import Image4 from "../../assets/graphicscard.jpg";
import Image5 from "../../assets/processor.jpg";
import Image6 from "../../assets/memory.webp";
import Image7 from "../../assets/storage.jpg";

export const Data = [
    {
        id: 1,
        images: Image1,
        title: "John Doe",
        progressImages: [Image4, Image5, Image6, Image7],
        progressTitle: ["Graphics", "Processor", "Memory", "Storage"],
        progress: [60, 30, 70, 90],
        price: {
            title: "Starting at:",
            amount: "$1000",
            description: "Or as low as $77.41 monthly*",
            finance: "*Subject to approval of credit application. Rates range from 0 to 29.99% APR, resulting in, for example, 36 monthly payments of $32.26 at 9.99% APR, per $1,000 borrowed. APRs will vary depending on credit qualifications, loan amount, and term. Bread Pay™ loans are made by Comenity Capital Bank, a Bread Financial™ company.",
          },
    },
    {
        id: 2,
        images: Image2,
        title: "Chris Doe",
        progressImages: [Image4, Image5, Image6, Image7],
        progressTitle: ["Graphics", "Processor", "Memory", "Storage"],
        progress: [50, 30, 70, 100],
        price: {
            title: "Starting at:",
            amount: "$1000",
            description: "Or as low as $77.41 monthly*",
            finance: "*Subject to approval of credit application. Rates range from 0 to 29.99% APR, resulting in, for example, 36 monthly payments of $32.26 at 9.99% APR, per $1,000 borrowed. APRs will vary depending on credit qualifications, loan amount, and term. Bread Pay™ loans are made by Comenity Capital Bank, a Bread Financial™ company.",
          },
    },
    {
        id: 3,
        images: Image3,
        title: "Kelvin Doe",
        progressImages: [Image4, Image5, Image6, Image7],
        progressTitle: ["Graphics", "Processor", "Memory", "Storage"],
        progress: [50, 30, 70, 90],
        price: {
            title: "Starting at:",
            amount: "$1000",
            description: "Or as low as $77.41 monthly*",
            finance: "*Subject to approval of credit application. Rates range from 0 to 29.99% APR, resulting in, for example, 36 monthly payments of $32.26 at 9.99% APR, per $1,000 borrowed. APRs will vary depending on credit qualifications, loan amount, and term. Bread Pay™ loans are made by Comenity Capital Bank, a Bread Financial™ company.",
          },
    },
];

