import React from 'react'
import dynamic from 'next/dynamic'
import Button from '../../component/Button'
import Link from 'next/link'
import TextDown from '@/component/TextDropdown'
import Credit from '@/component/CreditDropDown'
import CDropdown from '../../component/CouponDropdown'
type Props = {}

const CheckOut = (props: Props) => {
  return (
    <div className='flex h-auto w-full flex-wrap mt-16 md:mt-16 lg:mt-32 mb-96 md:px-20'>
      <div className=' flex-1 w-3/5 py-6 mx-3 bg-grey-100 flex-wrap '>
        <div className='font-light text-xs'>Returning customer? <Link href="/Profile" className="text-red-500 hover:underline">Click here to login</Link></div>
        <p className='font-semibold text-xl pb-4' >Billing Details</p>
        <form action="#">
          <div className='flex flex-wrap'>
            <div className='font-semibold text-xs w-1/2'> <label htmlFor='First Name*' >First Name *</label>
              <input type='text' placeholder='First Name' className='border border-gray-400 w-full py-2 px-4 rounded-md' /></div>
            <div className='font-semibold text-xs w-1/2 pl-3' > <label htmlFor='Last name*' >Last Name *</label>
              <input type='text' placeholder='Last Name' className='border border-gray-400 w-full py-2 px-4 rounded-md' /></div>
          </div><br />
          <div>
            <div className='flex flex-col font-semibold text-xs h-auto flex-wrap'> <label htmlFor='Company Name (optional)' >Company Name (optional) </label><br />
              <input type='text' placeholder='Company Name' className='border border-gray-400 py-2 px-4 p-4 rounded-md' /></div><br />
            <div className='flex flex-col font-semibold text-xs h-auto flex-wrap '><label htmlFor='Country/region*'>Country / Region *</label><br />
              <select className='border-gray-400 border h-10 w-full ps-6 rounded-md'>
                <option>India</option>
                <option>China</option>
                <option>Japan</option>
              </select>
            </div><br />
            <div className='flex flex-col font-semibold text-xs h-auto flex-wrap'> <label htmlFor='Street address *' >Street Address *</label><br />
              <input type='text' placeholder='House Number and Street Name' className='border border-gray-400 py-2 px-4 p-4 rounded-md' /> </div><br />
            <div className='flex flex-col font-semibold text-xs h-auto flex-wrap'>
              <input type='text' placeholder='Apartment,Suit,Unit,Etc.(optional)' className='border border-gray-400 py-2 px-4 p-4 rounded-md' /> <br />
            </div><br />
            <div className='flex flex-col font-semibold text-xs h-auto flex-wrap'><label htmlFor='Town / City *'>Town / City *</label><br />
              <select className='border-gray-400 border h-10 w-full ps-6 rounded-md'>
                <option >Mumbai</option>
                <option>Ahmedabad</option>
                <option>Gandhinagar</option>
                <option>Surat</option>
              </select>
            </div><br />
            <div className='flex flex-col font-semibold text-xs h-auto  flex-wrap'> <label htmlFor='Postcode *' >Postcode *</label><br />
              <input type='text' placeholder='Postcode' className='border border-gray-400 py-2 px-4 p-4 rounded-md' /> </div><br />
            <div className='flex flex-col  font-semibold text-xs h-auto'> <label htmlFor='Phone *' >Phone *</label><br />
              <input type='text' placeholder='Phone' className='border border-gray-400 py-2 px-4 p-4 rounded-md' /> </div><br />
            <div className='flex flex-col font-semibold text-xs h-auto '> <label htmlFor='Email Address *' >Email Address *</label><br />
              <input type='text' placeholder='Your Email Address' className='border border-gray-400 py-2 px-4 p-4 rounded-md' /> </div><br />
            <div className='inline-flex justify-center items-center text-xs font-semibold pb-4'>
              <div className='flex pr-1'>
                <input type="checkbox" className='accent-rgb(6 182 212)' />
              </div>
              <div className='flex'>
                Ship to a different address?
              </div>
            </div>
            <br />
            <div className='flex flex-col font-semibold text-xs h-auto'> <label htmlFor=' Order Notes (optional)' >Order Notes (optional) </label><br />
              <input type='text' placeholder='Notes about your order,e.g. special notes for delivery' className='border border-gray-400 py-2 px-4 p-4 rounded-md' /></div><br />
          </div>
        </form>
      </div>
      <div className='flex w-full lg:w-2/5 justiy-end flex-wrap mx-3'>
        <div className=' flex-1 w-1 mt-20 mb-20 min-h-screen flex-wrap'>

          <div className=' flex-auto border-2 border-grey h-auto w-full divide-y divide-gray-400 flex-wrap '>
            <div className='font-bold text-xl mx-4 md:py-6'>Your Order<br /><h6 className='font-bold text-xs mt-3'>product</h6>
            </div>
            <div className='font-semibold text-xs mx-4 py-6'>Purl Knit Dungarees  × 1 <div className='font-semibold text-xs float-right'>$6.66
              <br /><h6 className='font-light text-xs/5 flex-wrap'> (ex. VAT)</h6> </div> <h6 className='font-light text-xs'> Color :: brown <br /> Select Size :: 03M</h6></div>
            <div className='font-semibold text-xs mx-4 py-6'>2-piece Set Light Green  × 2 <div className='font-semibold text-xs float-right'>$41.65
              <br /><h6 className='font-light text-xs/5'> (ex. VAT)</h6> </div> <h6 className='font-light text-xs'> Select Size :: 18M(12-18M)</h6></div>
            <div className='font-bold text-xs mx-4 py-6 '>Subtotal<h6 className='font-semibold text-xs float-right me-2'>$48.31</h6></div>
            <div className='font-bold text-xs mx-4 py-6'>Shipping <div className='font-semibold text-xs float-right'>$10.00<h6 className='font-light text-xs/5'> (ex. VAT)</h6> </div><br />
              <div className="flex items-center flex-wrap">
                <input type="radio" id="option1" name="options" className="form-radio text-blue-500" />
                <label htmlFor="option1" className="ml-2 text-gray-700">Flate Rate:</label>
              </div>
              <div className="flex items-center flex-wrap">
                <input type="radio" id="option2" name="options" className="form-radio text-blue-500" />
                <label htmlFor="option2" className="ml-2 text-gray-700">Free Shipping:</label>
              </div>
              <div className="flex items-center flex-wrap">
                <input type="radio" id="option3" name="options" className="form-radio text-blue-500" />
                <label htmlFor="option3" className="ml-2 text-gray-700">Local Pickup</label>
              </div>
            </div>
            <div className='font-bold text-xs mx-4 py-6'>VAT<h6 className='font-semibold text-xs/5  float-right me-2'>$11.66</h6>
            </div>
            <div className='font-bold text-xs mx-4 py-6'>Total<h6 className='font-semibold text-xs/5  float-right me-2'>$69.97</h6>
            </div>
          </div>
          <br />
          <div className='inline-flex border-2 border-grey h-auto w-full flex-wrap gap-4'>
            <div className='flex text-xs my-6'>
              <CDropdown text={['Click here to enter your coupon code']} />
            </div>
          </div><br />
          <div className='flex-auto border-2 border-grey h-auto w-full flex-wrap gap-4' >
            <br />
            <div className='justify-start text-xs font-semibold flex-wrap'>
              <TextDown />
              <Credit />
            </div>
            <div className='justify-start p-4 text-xs font-light flex-wrap'>
              Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described
              in our <a href="#" className="text-red-500 hover:underline">Privacy Policy</a><br /><br />
              <div className='inline-flex items-center text-xs'>
                <div className='flex pr-1'>
                  <input type="checkbox" className='accent-rgb(6 182 212)' />
                </div>
                <div className='flex'>
                  <div className='inline-block text-xs'>
                  I have read and agree to the website <a href="#" className="text-red-500 hover:underline">terms and conditions *</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center pb-4'>
              <Button text={'Place Order'} />
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default CheckOut