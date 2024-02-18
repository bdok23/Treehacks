const credential = {"id":"urn:uuid:c4908518-e2e4-43c0-8da0-50798ac0cd2a","credentialSubject":{"voterID":"Voter123456","age":"25","citizenship":"US","eligibleToVote":true,"id":"did:polygon:0x6C3b3225759Cbda68F96378A9F0277B4374f9F06"},"expirationDate":"2034-02-02","nft":{"tokenId":"1","chain":"polygon","contractAddress":"0x9881534EE3b2B7C2D34DDa1421811B0968B7A0ED"},"issuer":{"id":"did:polygon:0x4FfCf5e120B12Ae66154Fbdc372d9D339FB7b0f3"},"type":["VerifiableCredential","urn:uuid:87657211-466d-4b45-964d-305756847d87"],"issuanceDate":"2024-02-18T06:00:36.048Z","@context":["https://www.w3.org/2018/credentials/v1"],"proof":{"verificationMethod":"did:polygon:0x4FfCf5e120B12Ae66154Fbdc372d9D339FB7b0f3#ethereumAddress","ethereumAddress":null,"created":"2024-02-18T06:01:18.393Z","proofPurpose":"assertionMethod","type":"EthereumEip712Signature2021","proofValue":"0xcdbe5e0864856a2f49e16db8c7880bbe15eef84af8f4183de443d976e07c7045062e2473fac160e94175eafb25e372e1612cf94fb43cc40b0ef9d041a92c39041c","eip712":{"domain":{"name":"Crossmint","version":"0.1","chainId":4,"verifyingContract":"0xD8393a735e8b7B6E199db9A537cf27C61Aa74954"},"types":{"VerifiableCredential":[{"name":"@context","type":"string[]"},{"name":"type","type":"string[]"},{"name":"id","type":"string"},{"name":"issuer","type":"Issuer"},{"name":"credentialSubject","type":"CredentialSubject"},{"name":"issuanceDate","type":"string"},{"name":"expirationDate","type":"string"},{"name":"nft","type":"Nft"}],"CredentialSubject":[{"name":"id","type":"string"},{"name":"voterID","type":"string"},{"name":"age","type":"string"},{"name":"citizenship","type":"string"},{"name":"eligibleToVote","type":"bool"}],"Issuer":[{"name":"id","type":"string"}],"Nft":[{"name":"tokenId","type":"string"},{"name":"contractAddress","type":"string"},{"name":"chain","type":"string"}]},"primaryType":"VerifiableCredential"}}}
  
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
  