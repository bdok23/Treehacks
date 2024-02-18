// originally finale.js (combines next 2 steps: retrieve and verify)

// combinedScript.js
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

global.jsonData = null;

const retrieveAndVerifyCredential = async () => {
  // Step 1: Retrieve the credential
  const contractAddress = "0x0949BA9675211bcFcE7a3bB8d08cc1dfc0b0B8BD";
  const tokenId = "1";
  const retrieveOptions = {
    method: "GET",
    headers: {
      "X-API-KEY": "sk_staging_AGQCMCiEigeFJttJ3BbSjyBDbaxjMW4DB6kQ9vW2hLVaLKc36QQUWdYZHnhYvfTXS4Y9Y4w7VNke1qRStay1nkqCCK2KDpjHa2RdLx54Sm3qUfFUP4AKq5qXQLZcs5SNsFxohxZqgde8rVnJi9WGsDFVnsdVH8ABeq17m4qkGVTfYXxpyFa4CJ16V9rEUgb9SuWsTeob386JVrvQ5q5XZrrV",
    },
  };

  let credentialData;
  try {
    const response = await fetch(`https://staging.crossmint.com/api/unstable/nfts/polygon:${contractAddress}:${tokenId}/credentials`, retrieveOptions);
    credentialData = await response.json();
  } catch (error) {
    console.error("Error retrieving credential:", error);
    return;
  }

  // Step 2: Verify the credential
  const verifyOptions = {
    method: "POST",
    headers: {
      "X-API-KEY": "sk_staging_AGQCMCiEigeFJttJ3BbSjyBDbaxjMW4DB6kQ9vW2hLVaLKc36QQUWdYZHnhYvfTXS4Y9Y4w7VNke1qRStay1nkqCCK2KDpjHa2RdLx54Sm3qUfFUP4AKq5qXQLZcs5SNsFxohxZqgde8rVnJi9WGsDFVnsdVH8ABeq17m4qkGVTfYXxpyFa4CJ16V9rEUgb9SuWsTeob386JVrvQ5q5XZrrV",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ credential: credentialData }), // Include the retrieved credential data
  };

  try {
    const verifyResponse = await fetch("https://staging.crossmint.com/api/unstable/credentials/verify", verifyOptions);
    const verifyResult = await verifyResponse.json();
    global.jsonData = verifyResult;
    console.log("Credential verification result:", verifyResult);
  } catch (error) {
    console.error("Error verifying credential:", error);
  }
};

// Call the function to retrieve and verify the credential
retrieveAndVerifyCredential();
