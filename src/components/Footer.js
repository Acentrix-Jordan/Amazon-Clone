function Footer() {
  return (
    <div className='flex flex-col' onclick='window.scrollTo(0, 0)'>
      {/*Footer bar one*/}
      <div className='bg-amazon_blue-lighter text-sm p-3 w-full flex justify-center'>
        <p className='link text-gray-300'>Back to top</p>
      </div>

      {/*Footer bar two*/}
      <div className='max-w-full flex flex-col md:flex-row  md:justify-around bg-amazon_blue text-white h-full pb-5'>
        <div className='ml-5'>
          <h3 className='mt-4'>Get to Know Us</h3>
          <div className='text-sm leading-snug mt-2 text-gray-300'>
            <p className='link'>Careers</p>
            <p className='link'>About Us</p>
            <p className='link'>UK Modern Slavery Statement</p>
            <p className='link'>Sustainability</p>
          </div>
        </div>
        <div className='ml-5'>
          <h3 className='mt-4'>Make Money with Us</h3>
          <div className='text-sm leading-snug mt-2 text-gray-300'>
            <p className='link'>Sell on Amazon</p>
            <p className='link'>Sell Under Private Brands</p>
            <p className='link'>
              Sell On Amazon <br />
              Buisness
            </p>
            <p className='link'>
              Sell On Amazon <br />
              Handmade
            </p>
            <p className='link'>
              Sell On Amazon <br />
              Launchpad
            </p>
            <p className='link'>Associates Programme</p>
            <p className='link'>Fulfilment by Amazon</p>
            <p className='link'>Seller Fulfilled Prime</p>
            <p className='link'>Advertise your Products</p>
            <p className='link'>
              Independently Publish <br /> with Us
            </p>
            <p className='link'>Amazon Pay</p>
            <p className='link'>Host an Amazon Hub</p>
            <p className='link'> &gt; See all</p>
          </div>
        </div>
        <div className='ml-5'>
          <h3 className='mt-4'>Amazon Payment Methods</h3>
          <div className='text-sm leading-snug mt-2 text-gray-300'>
            <p className='link'>Amazon Platinum Mastercard</p>
            <p className='link'>Amazon Classic Mastercard</p>
            <p className='link'>Amazon Money Store</p>
            <p className='link'>Gift Cards</p>
            <p className='link'>Amazon Currency Converter</p>
            <p className='link'>Payment Methods Help</p>
            <p className='link'>Shop with Points</p>
            <p className='link'>Top Up Your Account</p>
            <p className='link'>Top Up Your Account in Store</p>
          </div>
        </div>
        <div className='ml-5'>
          <h3 className='mt-4'>Let Us Help You</h3>
          <div className='text-sm leading-snug mt-2 text-gray-300'>
            <p className='link'>COVID-19 and Amazon</p>
            <p className='link'>
              Track Packages or
              <br /> View Orders
            </p>
            <p className='link'>
              Delivery Rates &<br /> Policies
            </p>
            <p className='link'>Amazon Prime</p>
            <p className='link'>
              Returns &<br /> Replacements
            </p>
            <p className='link'>Recycling</p>
            <p className='link'>
              Manage Your
              <br /> Content and <br /> Devices
            </p>
            <p className='link'>
              Amazon Mobile <br /> App
            </p>
            <p className='link'>Amazon Assistant</p>
            <p className='link'>Customer Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
