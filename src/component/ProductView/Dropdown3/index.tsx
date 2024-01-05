import React from 'react';
import Dropdown3 from './item';
// import Dropdown from '@/component/ProductView/Dropdown3/item/index';

const option1: string[] = ['Long sleeve T-shirt with a round neckline and button fastening on the shoulder.',' ','Care for water: produced using less water.', ' ', 'We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our products.', ' ', 'We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.',' ','The Green to Wear 2.0 standard aims to minimise the environmental impact of textile manufacturing. To that end, we have developed Inditex’s The List programme, which helps guarantee both that production processes are clean and that our garments are safe and healthy.'];
const option2: string[] = ['Free Standard Shipping with any online purchase of $50 (merchandise subtotal excludes store pick up items; merchandise subtotal is calculated before sales tax, before gift wrap charges, and after any discounts or coupons). Truck delivery and shipping surcharges on over-sized or extremely heavy items will still apply (these charges are indicated on the appropriate product information pages and will be displayed in the shipping subtotal of your order). Orders typically arrive within 3-6 business days. Items shipped directly from the vendor or to Alaska and Hawaii have longer delivery lead times. This offer does not apply to Alaska, Hawaii, Puerto Rico or Business Direct orders.']

const PVDrop: React.FC = () => {
  return (
    <div className='flex flex-col '>
      <div className="flex items-center border-t-2 border-b-2">
      <Dropdown3 options={option1} text={['Details']} /> 
    </div>
    <div className="flex items-center border-b-2">
      <Dropdown3 options={option2} text={['Shipping & Returns']} />
    </div>
    </div>
  );
};

export default PVDrop;

