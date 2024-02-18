const collectionId = "32b26117-c85c-4ca1-95ef-eed7e515f7e6"; // Replace with your actual collection ID
const options = {
  method: "POST",
  headers: {
    "X-API-KEY": "sk_staging_AGQCMCiEigeFJttJ3BbSjyBDbaxjMW4DB6kQ9vW2hLVaLKc36QQUWdYZHnhYvfTXS4Y9Y4w7VNke1qRStay1nkqCCK2KDpjHa2RdLx54Sm3qUfFUP4AKq5qXQLZcs5SNsFxohxZqgde8rVnJi9WGsDFVnsdVH8ABeq17m4qkGVTfYXxpyFa4CJ16V9rEUgb9SuWsTeob386JVrvQ5q5XZrrV", // Replace with your actual API key
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    metadata: {
      name: "Voter Verification Credential",
      image: "ipfs://QmUGeWerAfyKVVdAjaxYdAhK74oJmBvusPdKtNDN3e1bYN", // Optional: A relevant image or icon if you have one // copied the image from the documentation
      description: "Credential for verifying voter eligibility."
    },
    recipient: "polygon:0x6C3b3225759Cbda68F96378A9F0277B4374f9F06", // Replace with the recipient's actual blockchain address    email:a@a.com:polygon
    credential: {
      subject: {
        voterID: "Voter123456", // Example Voter ID, replace with actual data
        age: "25", // Age as a string
        citizenship: "US", // Citizenship, matching your schema requirements
        eligibleToVote: true, // This should match the type expected by your schema, boolean
      },
      expiresAt: "2034-02-02" // Expiration date of the credential
    }
  }),
};

fetch(`https://staging.crossmint.com/api/unstable/collections/${collectionId}/credentials`, options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
