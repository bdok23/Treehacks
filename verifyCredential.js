const credential = {"id":"urn:uuid:07276b9d-6efe-4710-a6b3-cde9171b2ef0","credentialSubject":{"voterID":"Voter123456","age":"15","citizenship":"US","eligibleToVote":false,"id":"did:polygon:0x6C3b3225759Cbda68F96378A9F0277B4374f9F06"},"expirationDate":"2034-02-02","nft":{"tokenId":"1","chain":"polygon","contractAddress":"0x0949BA9675211bcFcE7a3bB8d08cc1dfc0b0B8BD"},"issuer":{"id":"did:polygon:0x4FfCf5e120B12Ae66154Fbdc372d9D339FB7b0f3"},"type":["VerifiableCredential","urn:uuid:7d2c35d9-6b14-49e5-bb6d-3966c11c597b"],"issuanceDate":"2024-02-18T11:49:20.417Z","@context":["https://www.w3.org/2018/credentials/v1"],"proof":{"verificationMethod":"did:polygon:0x4FfCf5e120B12Ae66154Fbdc372d9D339FB7b0f3#ethereumAddress","ethereumAddress":null,"created":"2024-02-18T11:49:49.279Z","proofPurpose":"assertionMethod","type":"EthereumEip712Signature2021","proofValue":"0xf52ffac767f78182ae704bd40c5efc6eeed7ca93102ede10666bd760e63a7cf478eb43defd6884e04da0518ea5ec0af22dc8e476971c6bdc349f5db8587847291c","eip712":{"domain":{"name":"Crossmint","version":"0.1","chainId":4,"verifyingContract":"0xD8393a735e8b7B6E199db9A537cf27C61Aa74954"},"types":{"VerifiableCredential":[{"name":"@context","type":"string[]"},{"name":"type","type":"string[]"},{"name":"id","type":"string"},{"name":"issuer","type":"Issuer"},{"name":"credentialSubject","type":"CredentialSubject"},{"name":"issuanceDate","type":"string"},{"name":"expirationDate","type":"string"},{"name":"nft","type":"Nft"}],"CredentialSubject":[{"name":"id","type":"string"},{"name":"voterID","type":"string"},{"name":"age","type":"string"},{"name":"citizenship","type":"string"},{"name":"eligibleToVote","type":"bool"}],"Issuer":[{"name":"id","type":"string"}],"Nft":[{"name":"tokenId","type":"string"},{"name":"contractAddress","type":"string"},{"name":"chain","type":"string"}]},"primaryType":"VerifiableCredential"}}}
  
  const options = {
    method: "POST",
    headers: {
      "X-API-KEY": "sk_staging_AGQCMCiEigeFJttJ3BbSjyBDbaxjMW4DB6kQ9vW2hLVaLKc36QQUWdYZHnhYvfTXS4Y9Y4w7VNke1qRStay1nkqCCK2KDpjHa2RdLx54Sm3qUfFUP4AKq5qXQLZcs5SNsFxohxZqgde8rVnJi9WGsDFVnsdVH8ABeq17m4qkGVTfYXxpyFa4CJ16V9rEUgb9SuWsTeob386JVrvQ5q5XZrrV", // Replace with your actual API key
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ credential: credential }), // Include the credential object
  };
  
  fetch("https://staging.crossmint.com/api/unstable/credentials/verify", options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  