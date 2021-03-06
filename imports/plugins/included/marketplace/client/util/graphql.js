import simpleGraphQLClient from "/imports/plugins/core/graphql/lib/helpers/simpleClient";
import placeMarketplaceOrderWithStripeCardPaymentMutation from "./placeMarketplaceOrderWithStripeCardPayment.graphql";

export const placeMarketplaceOrderWithStripeCardPayment = simpleGraphQLClient.createMutationFunction(placeMarketplaceOrderWithStripeCardPaymentMutation);
