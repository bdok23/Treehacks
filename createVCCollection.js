const options = {
  method: "POST",
  headers: {
    "X-API-KEY": "sk_staging_AGQCMCiEigeFJttJ3BbSjyBDbaxjMW4DB6kQ9vW2hLVaLKc36QQUWdYZHnhYvfTXS4Y9Y4w7VNke1qRStay1nkqCCK2KDpjHa2RdLx54Sm3qUfFUP4AKq5qXQLZcs5SNsFxohxZqgde8rVnJi9WGsDFVnsdVH8ABeq17m4qkGVTfYXxpyFa4CJ16V9rEUgb9SuWsTeob386JVrvQ5q5XZrrV", // Replace with your actual API key
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    chain: "polygon",
    credentials: {
      type: "urn:uuid:87657211-466d-4b45-964d-305756847d87" // Replace with the ID obtained after creating a credential type
    },
    metadata: {
      name: "Voter Verification Credentials 2024", // Example name, adjust as needed
      description: "Collection of verifiable credentials for voter authentication in the 2024 elections." // Example description, adjust as needed
    }
  }),
};

fetch("https://staging.crossmint.com/api/unstable/collections/", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
