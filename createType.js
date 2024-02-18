const options = {
  method: "POST",
  headers: {
    "X-API-KEY": "sk_staging_AGQCMCiEigeFJttJ3BbSjyBDbaxjMW4DB6kQ9vW2hLVaLKc36QQUWdYZHnhYvfTXS4Y9Y4w7VNke1qRStay1nkqCCK2KDpjHa2RdLx54Sm3qUfFUP4AKq5qXQLZcs5SNsFxohxZqgde8rVnJi9WGsDFVnsdVH8ABeq17m4qkGVTfYXxpyFa4CJ16V9rEUgb9SuWsTeob386JVrvQ5q5XZrrV",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    credentialSubjectSchema: [
      { name: "voterID", type: "string" },
      { name: "age", type: "string" },
      { name: "citizenship", type: "string" },
      { name: "eligibleToVote", type: "bool" }
    ]
  }),
};

fetch("https://staging.crossmint.com/api/unstable/credentials/types", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
