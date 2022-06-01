import Commerce from "@chec/commerce.js";

//const commerce = new Commerce(
    //"pk_25095f6ed4dac89f69f1e4337484555ec6c07ef2fc5d8"
  //);
   
const checAPIKey = "pk_25095f6ed4dac89f69f1e4337484555ec6c07ef2fc5d8";
const devEnvironment = process.env.NODE_ENV === 'development';

// Commerce.js constructor options
const commerceConfig = {
  axiosConfig: {
    headers: {
      'X-Chec-Agent': 'commerce.js/v2',
      'Chec-Version': '2021-05-05',
    },
  },
};

if (devEnvironment && !checAPIKey) {
  throw Error('Your public API key must be provided as an environment variable named `NEXT_PUBLIC_CHEC_PUBLIC_API_KEY`. Obtain your Chec public key by logging into your Chec account and navigate to Setup > Developer, or can be obtained with the Chec CLI via with the command chec whoami');
}

export const commerce = new Commerce(
  checAPIKey,
  devEnvironment,
  commerceConfig,
);