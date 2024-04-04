export interface CheckoutStage {
  title: string;
  stageNumber: number;
  urlkey: string;
}

export const checkoutStages: CheckoutStage[] = [
  {
    title: 'cart',
    urlkey: '/store/view-cart',
    stageNumber: 1
  },
  {
    title: 'details',
    urlkey: '/store/checkout/details',
    stageNumber: 2
  },
  { title: 'shipping', urlkey: '/store/checkout/shipping', stageNumber: 3 },
  { title: 'payment', urlkey: '/store/checkout/payment', stageNumber: 4 }
];
