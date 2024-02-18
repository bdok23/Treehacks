const contractAddress = "0x0949BA9675211bcFcE7a3bB8d08cc1dfc0b0B8BD";
const tokenId = "1";
const options = {
  method: "GET",
  headers: {
    "X-API-KEY": "sk_staging_AGQCMCiEigeFJttJ3BbSjyBDbaxjMW4DB6kQ9vW2hLVaLKc36QQUWdYZHnhYvfTXS4Y9Y4w7VNke1qRStay1nkqCCK2KDpjHa2RdLx54Sm3qUfFUP4AKq5qXQLZcs5SNsFxohxZqgde8rVnJi9WGsDFVnsdVH8ABeq17m4qkGVTfYXxpyFa4CJ16V9rEUgb9SuWsTeob386JVrvQ5q5XZrrV",
  },
};

fetch(
  `https://staging.crossmint.com/api/unstable/nfts/polygon:${contractAddress}:${tokenId}/credentials`,
  options
)
  .then((response) => response.json())
  .then((response) => console.log(JSON.stringify(response)))
  .catch((err) => console.error(err));
