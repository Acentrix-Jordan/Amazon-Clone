import { useSession } from "next-auth/client";
import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";

function checkout() {
  const items = useSelector(selectItems);
  const [session] = useSession();
  const total = useSelector(selectTotal);

  return (
    <div>
      <Header />

      <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/*Left Section*/}
        <div className='flex-grow m-5 shadow-sm'>
          {/*Add Image*/}
          <Image
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
            objectFit='contain'
          />

          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : `Your basket contains ${items.length} items`}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        {/*Right Section*/}
        <div className='flex flex-col bg-white p-10 shadow-md'>
          {items.length > 0 && (
            <>
              <h2 className='whitespace-nowrap'>
                Subtotal ({items.length} items):
                <span className='font-bold ml-2'>
                  {<Currency quantity={total} currency='GBP'></Currency>}
                </span>
              </h2>

              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default checkout;
