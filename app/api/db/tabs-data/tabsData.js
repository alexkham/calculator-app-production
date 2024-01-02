import DecimalToAnyBaseConverter from "@/app/components/decimal-to-any/DecimalToAnyDemo";
const tabData = [
    
    {
      title: 'Decimal to Binary Converter',
      content:<DecimalToAnyBaseConverter base={"binary"} n={2} sanitizedLength={10000}/>//<p>This is the Dashboard tab's content.</p>,
      
    },
    {
      title: 'Decimal to Hexadecimal Converter',
      content:<DecimalToAnyBaseConverter base={"hexadecimal"} n={16} sanitizedLength={100000}/>//<p>This is the Settings tab's content 1111111111111111111111111111111111111111111111111111111111111111111111111111111.</p>,
     
    },
    {
      title: 'Decimal to Octal Converter',
      content:<DecimalToAnyBaseConverter base={"octal"} n={8} sanitizedLength={100000}></DecimalToAnyBaseConverter>//<p>This is the Contacts tab's content.</p>,
      
    },
  ];
 export default  tabData;