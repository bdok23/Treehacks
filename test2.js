const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function waitForContractAddress(credentialRetrievalId, attempts = 0) {
    const maxAttempts = 10; // Set a maximum to prevent infinite loops
    const delay = 2000; // Delay between attempts in milliseconds (2 seconds here)

    try {
        // Fetch the current status using the credentialRetrievalId
        const response = await fetch(`https://staging.crossmint.com/api/unstable/credentials/retrieval/${credentialRetrievalId}`, {
            headers: { "X-API-KEY": "your_api_key_here" },
        });
        const data = await response.json();

        if (data.onChain.status !== 'pending') {
            // If the status is not pending, return the contract address
            return data.onChain.contractAddress;
        } else if (attempts < maxAttempts) {
            // If the status is still pending and max attempts not reached, wait and retry
            console.log('Waiting for contract address to resolve...');
            await new Promise(resolve => setTimeout(resolve, delay)); // Wait for 2 seconds
            return waitForContractAddress(credentialRetrievalId, attempts + 1); // Recursively check again
        } else {
            // If max attempts reached and status still pending, return null or throw an error
            console.error('Max attempts reached. Contract address still pending.');
            return null;
        }
    } catch (error) {
        console.error('Error while waiting for contract address:', error);
        return null;
    }
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function createTypeCollectionAndIssueCredential() {
    const apiKey = "sk_staging_AGQCMCiEigeFJttJ3BbSjyBDbaxjMW4DB6kQ9vW2hLVaLKc36QQUWdYZHnhYvfTXS4Y9Y4w7VNke1qRStay1nkqCCK2KDpjHa2RdLx54Sm3qUfFUP4AKq5qXQLZcs5SNsFxohxZqgde8rVnJi9WGsDFVnsdVH8ABeq17m4qkGVTfYXxpyFa4CJ16V9rEUgb9SuWsTeob386JVrvQ5q5XZrrV";
    const headers = {
        "X-API-KEY": apiKey,
        "Content-Type": "application/json",
    };

    // Step 1: Create credential type
    const typeOptions = {
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
        const typeResponse = await fetch("https://staging.crossmint.com/api/unstable/credentials/types", typeOptions);
        const typeData = await typeResponse.json();
        console.log("Type created:", typeData);

        // Extract the ID from the type creation response
        const typeId = typeData.id;

        // Step 2: Create VC collection with the obtained type ID
        const collectionOptions = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                chain: "polygon",
                credentials: { type: typeId },
                metadata: {
                    name: "Voter Verification Credentials 2024",
                    description: "Collection of verifiable credentials for voter authentication in the 2024 elections."
                }
            }),
        };

        const collectionResponse = await fetch("https://staging.crossmint.com/api/unstable/collections/", collectionOptions);
        const collectionData = await collectionResponse.json();
        console.log("Collection created:", collectionData);
        // Extract the collection ID from the collection creation response
        const collectionId = collectionData.id;

        // Step 3: Issue a credential using the collection ID

        
        const issueCredentialOptions = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                metadata: {
                    name: "Voter Verification Credential",
                    image: "ipfs://QmUGeWerAfyKVVdAjaxYdAhK74oJmBvusPdKtNDN3e1bYN",
                    description: "Credential for verifying voter eligibility."
                },
                recipient: "polygon:0x6C3b3225759Cbda68F96378A9F0277B4374f9F06",
                credential: {
                    subject: {
                        voterID: "Voter123456",
                        age: "25",
                        citizenship: "US",
                        eligibleToVote: true,
                    },
                    expiresAt: "2034-02-02"
                }
            }),
        };
        
        const issueResponse = await fetch(`https://staging.crossmint.com/api/unstable/collections/${collectionId}/credentials`, issueCredentialOptions);
        const issueData = await issueResponse.json();
        console.log("Credential issued:", issueData);
        fetch(`https://staging.crossmint.com/api/unstable/collections/${collectionId}/credentials`, issueCredentialOptions)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));

        const credentialRetrievalId = issueData.retrievalId;
        await delay(20000)
        const contractAddress = await waitForContractAddress(credentialRetrievalId);
        console.log("Contract Address:", contractAddress);
    } catch (error) {
        console.error("Error:", error);
    }
}

createTypeCollectionAndIssueCredential();
