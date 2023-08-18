import { Api, use, StackContext } from "sst/constructs";
import { StorageStack } from "./StorageStack";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY as string;



export function ApiStack({ stack }: StackContext) {
  const { table } = use(StorageStack);
  

  // Create the API
  const api = new Api(stack, "Api", {
    defaults: {
      authorizer: "iam",
      function: {
        bind: [table],
        environment: {
          STRIPE_SECRET_KEY: stripeSecretKey,
        },
      },
    },
    routes: {
      "POST /notes": "packages/functions/src/create.main",
      "GET /notes/{id}": "packages/functions/src/get.main",
      "GET /notes": "packages/functions/src/list.main",
      "PUT /notes/{id}": "packages/functions/src/update.main",
      "DELETE /notes/{id}": "packages/functions/src/delete.main",
      "POST /billing": "packages/functions/src/billing.main",
    },
  });

  // Show the API endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  // Return the API resource
  return {
    api,
  };
}
