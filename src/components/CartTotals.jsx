import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../utils';

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <h1 className="card bg-base-200">
      <div className="card-body">
        {/* subtotal */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        {/* shipping */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Shipping</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
        {/* tax */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>
        {/* order total */}
        <p className="flex justify-between text-sm border-base-300 pt-2">
          <span>Total</span>
          <span className="font-medium">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </h1>
  );
};

export default CartTotals;
