import {
  useSelector,
  useDispatch
} from "react-redux"

import {
  clearCart
} from "../features/cartSlice"

function CheckoutPage() {

  const dispatch =
    useDispatch()

  const {
    items,
    totalPrice,
    totalQuantity
  } = useSelector(
    state => state.cart
  )

  const handlePlaceOrder =
    () => {

      if (items.length === 0) {

        alert(
          "Cart is empty"
        )

        return
      }

      alert(
        "Order Placed Successfully"
      )

      dispatch(clearCart())
    }

  return (

    <div
      className="
      max-w-4xl
      mx-auto
    "
    >

      <h1
        className="
        text-4xl
        font-bold
        mb-8
      "
      >
        Checkout
      </h1>

      <div
        className="
        bg-white
        shadow-lg
        rounded-lg
        p-6
      "
      >

        <h2
          className="
          text-2xl
          font-bold
          mb-6
        "
        >
          Order Summary
        </h2>

        {
          items.map((item) => (

            <div
              key={item.id}
              className="
              flex
              justify-between
              border-b
              py-4
            "
            >

              <div>

                <h3 className="text-xl">
                  {item.name}
                </h3>

                <p>
                  Quantity:
                  {" "}
                  {item.quantity}
                </p>

              </div>

              <div>

                ₹
                {" "}
                {item.price * item.quantity}

              </div>

            </div>

          ))
        }

        <div className="mt-8">

          <h2
            className="
            text-2xl
            mb-2
          "
          >

            Total Items:
            {" "}
            {totalQuantity}

          </h2>

          <h2
            className="
            text-3xl
            font-bold
            mb-6
          "
          >

            Total Price:
            {" "}
            ₹ {totalPrice}

          </h2>

          <button
            onClick={handlePlaceOrder}
            className="
            bg-black
            text-white
            px-8
            py-4
            rounded
            text-xl
          "
          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  )
}

export default CheckoutPage