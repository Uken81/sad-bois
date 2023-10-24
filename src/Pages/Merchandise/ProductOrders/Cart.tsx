import { useContext, useEffect, useState } from 'react';
import { CartContext, CartContextType } from '../../../context';
import { ProductOrder } from './AddToCart';
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { currencyFormatter } from '../../../Utils/formatCurency';

export interface CartType {
  items: ProductOrder[];
  subtotal: number;
}

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext) as CartContextType;
  const [cartItems, setCartItems] = useState(cart?.items);
  const [subtotal] = useState(cart?.subtotal || 0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  let hasAgreed = false;

  useEffect(() => {
    console.log('AddToCart mounted');

    return () => {
      console.log('AddToCart unmounted');
    };
  }, []);

  const removeOrder = (id: string) => {
    const filteredArr = cart?.items?.filter((item) => item.orderId !== id) || [];

    setCart((prev) => ({
      ...prev,
      items: filteredArr,
      subtotal: prev?.subtotal || 0
    }));
  };

  const proceedToCheckout = () => {
    if (!hasAgreed) {
      setShowModal(true);
      return;
    }

    navigate('/checkout');
  };

  useEffect(() => {
    console.log('sub', subtotal);
    console.log('show', showModal);
  });

  const formattedSubtotal = currencyFormatter.format(subtotal);

  return (
    <div>
      {cartItems?.map((item) => {
        const { orderId, name, size, quantity, price, cost } = item;
        const formattedPrice = currencyFormatter.format(price);
        const formattedCost = currencyFormatter.format(cost);

        return (
          <div key={orderId}>
            <div className="product-img">
              <h1>IMAGE</h1>
            </div>
            <div>
              {name}
              {size}
              <span onClick={() => removeOrder(orderId)}>Remove</span>
            </div>
            <div>
              {formattedPrice}
              {quantity}
              {formattedCost}
            </div>
          </div>
        );
      })}
      <div className="modal show" style={{ display: 'block', position: 'initial' }}>
        <Modal show={showModal}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>You must aggree to terms and conditions to proceed to checkout.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="primary" onClick={() => setShowModal(false)}>
                OK
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
      <div className="subtotal">
        <h2>Subtotal {formattedSubtotal}</h2>
        <p>Taxes and shipping calculated and checkout</p>
      </div>
      <div>
        <Button onClick={() => navigate('/merchandise')}>CONTINUE SHOPPING</Button>
      </div>
      <div>
        <Form.Check onChange={() => (hasAgreed = !hasAgreed)} aria-label="terms" />
        <p>By making this purchase I agree to the terms and conditions.</p>
      </div>
      <Button onClick={proceedToCheckout}>CHECKOUT</Button>
    </div>
  );
};
