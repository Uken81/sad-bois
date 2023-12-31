import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate, useOutletContext } from 'react-router';
import { formatCurrency } from '../../../Utils/currencyFormatter';
import { useGetCart } from '../../../Hooks/useGetCart';
import { CartContextType } from '../../RouteWrappers/rootWrapper';

export const Cart = () => {
  const { cart, setCart } = useOutletContext() as CartContextType;
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const getCart = useGetCart();
  const formattedSubtotal = formatCurrency(cart?.subtotal ?? 0);
  let hasAgreed = false;

  useEffect(() => {
    if (!cart) {
      const retrivedCart = getCart();
      setCart(retrivedCart);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeItems = (id: string) => {
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

    navigate('/store/checkout/details');
  };

  useEffect(() => {
    console.log('sub', cart?.subtotal);
    console.log('cartInCart', cart);
  });

  return (
    <div>
      {cart?.items?.map((item) => {
        const { orderId, name, size, quantity, price, cost } = item;
        const formattedPrice = formatCurrency(price);
        const formattedCost = formatCurrency(cost);

        return (
          <div key={orderId}>
            <div className="product-img">
              <h1>IMAGE</h1>
            </div>
            <div>
              {name}
              {size}
              <span onClick={() => removeItems(orderId)}>Remove</span>
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
        <Button onClick={() => navigate('/store')}>CONTINUE SHOPPING</Button>
      </div>
      <div>
        <Form.Check onChange={() => (hasAgreed = !hasAgreed)} aria-label="terms" />
        <p>By making this purchase I agree to the terms and conditions.</p>
      </div>
      <Button onClick={proceedToCheckout}>CHECKOUT</Button>
    </div>
  );
};
