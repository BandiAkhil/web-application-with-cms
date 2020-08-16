export interface PaymentIntent {
  id: string;
  amount: number;
  clientSecret: string;
  status: string;
  metadata: {};
}
