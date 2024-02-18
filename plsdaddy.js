const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function createTypeAndCollection() {
  const apiKey = "sk_staging_AGQCMCiEigeFJttJ3BbSjyBDbaxjMW4DB6kQ9vW2hLVaLKc36QQUWdYZHnhYvfTXS4Y9Y4w7VNke1qRStay1nkqCCK2KDpjHa2RdLx54Sm3qUfFUP4AKq5qXQLZcs5SNsFxohxZqgde8rVnJi9WGsDFVnsdVH8ABeq17m4qkGVTfYXxpyFa4CJ16V9rEUgb9SuWsTeob386JVrvQ5q5XZrrV";
  const headers = {
    "X-API-KEY": apiKey,
    "Content-Type": "application/json",
  };

  // Create credential type
  const createTypeOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      credentialSubjectSchema: [
        { name: "voterID", type: "string" },
        { name: "age", type: "string" },
        { name: "citizenship", type: "string" },
        { name: "eligibleToVote", type: "bool" }
      ]
    }),
  };

  try {
    const typeResponse = await fetch("https://staging.crossmint.com/api/unstable/credentials/types", createTypeOptions);
    const typeData = await typeResponse.json();
    console.log("Type created:", typeData);

    // Extract the ID from the type creation response
    const typeId = typeData.id;  // Adjust this according to the actual structure of the response

    // Create VC collection with the obtained type ID
    const createCollectionOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        chain: "polygon",
        credentials: {
          type: typeId  // Use the obtained ID here
        },
        metadata: {
          name: "Voter Verification Credentials 2024",
          description: "Collection of verifiable credentials for voter authentication in the 2024 elections."
        }
      }),
    };

    const collectionResponse = await fetch("https://staging.crossmint.com/api/unstable/collections/", createCollectionOptions);
    const collectionData = await collectionResponse.json();
    console.log("Collection created:", collectionData);
    
    // Issue a credential with the new collection ID
    await issueCredential(apiKey, collectionData.id); // Pass in the new collection ID

  } catch (error) {
    console.error("Error:", error);
  }
}

async function issueCredential(apiKey, collectionId) {
  const options = {
    method: "POST",
    headers: {
      "X-API-KEY": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      metadata: {
        name: "Voter Verification Credential",
        image: "ipfs://QmUGeWerAfyKVVdAjaxYdAhK74oJmBvusPdKtNDN3e1bYN",
        description: "Credential for verifying voter eligibility."
      },
      recipient: "polygon:0x6C3b3225759Cbda68F96378A9F0277B4374f9F06", // Replace with the recipient's actual blockchain address
      credential: {
        subject: {
          voterID: "Voter123456", // Example Voter ID, replace with actual data
          age: "15", // Age as a string
          citizenship: "US", // Citizenship, matching your schema requirements
          eligibleToVote: false, // This should match the type expected by your schema, boolean
        },
        expiresAt: "2034-02-02" // Expiration date of the credential
      }
    }),
  };

  fetch(`https://staging.crossmint.com/api/unstable/collections/${collectionId}/credentials`, options)
    .then((response) => response.json())
    .then((response) => console.log("Credential issued:", response))
    .catch((err) => console.error("Issue credential error:", err));


    
}

createTypeAndCollection();