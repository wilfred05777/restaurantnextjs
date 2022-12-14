import Image from "next/legacy/image";
import React, { useState } from "react";
import styles from "../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";

//docs: https://github.com/paypal/react-paypal-js
// https://paypal.github.io/react-paypal-js/?path=/docs/example-paypalbuttons--default
import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";

const Cart = () => {
  const [open, setOpen] = useState(false);

  // This values are the props in the UI
  const amount = "2";
  const currency = "USD";
  const style = { layout: "vertical" };

  const dispatch = useDispatch;
  const cart = useSelector((state) => state.cart);

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency
        }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount
                    }
                  }
                ]
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function () {
              // Your code here after capture the order
            });
          }}
        />
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th> Product </th>
            <th> Name </th>
            <th> Extras </th>
            <th> Price </th>
            <th> Quantity </th>
            <th> Total </th>
          </tr>
          {cart.products.map((product) => (
            <tr className={styles.tr} key={product._id}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    // src="/img/pizza.png"
                    src={product.img}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>{product.title}</span>
              </td>
              <td>
                <span className={styles.extras}>
                  {product.extras.map((extra) => (
                    <span key={extra._id}>{extra.text}, </span>
                  ))}
                </span>
              </td>
              <td>
                {/* <span className={styles.price}>$19.90</span> */}
                <span className={styles.price}>{product.price}</span>
              </td>
              <td>
                <span className={styles.quantity}>{product.quantity}</span>
              </td>
              <td>
                <span className={styles.total}>
                  ${product.price * product.quantity}
                </span>
              </td>

              {/* <tr className={styles.tr}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      // src="/img/pizza.png"
                      src={product.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    Double ingredient, spicy sauce
                  </span>
                </td>
                <td>
                  <span className={styles.price}>{product.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    ${product.price * product.quantity}
                  </span>
                </td>
              </tr> */}
            </tr>
          ))}
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart.total}
          </div>
          {open ? (
            <div className={styles.paymentMethods}>
              <button className={styles.payButton}>CASH ON DELIVERY</button>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    // https://developer.paypal.com/dashboard/applications/edit/SB:QWRYdmNqRHl6Mk5jNTlrc01sZ3JaeWdUQlFXbEpUdXBIT0w0eG5YVURSdGFsUjRGMzltYVkzbjA5cWNCZmFaUWxUb1QyckF1Tk92S01CcEg=

                    // https://www.sandbox.paypal.com/signin
                    "AdXvcjDyz2Nc59ksMlgrZygTBQWlJTupHOL4xnXUDRtalR4F39maY3n09qcBfaZQlToT2rAuNOvKMBpH",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24"
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.button}>
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
