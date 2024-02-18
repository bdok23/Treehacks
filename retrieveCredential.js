const contractAddress = "0x9881534EE3b2B7C2D34DDa1421811B0968B7A0ED";
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
