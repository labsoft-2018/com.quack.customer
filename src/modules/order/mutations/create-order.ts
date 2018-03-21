import gql from 'graphql-tag'

export const CREATE_ORDER = gql`
mutation createOrder($order: OrderInput!, $paymentInfo: PaymentInfoInput!) {
  createOrder(input:{
    order: $order,
    paymentInfo: $paymentInfo
  }) {
    id
  }
}`