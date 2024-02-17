const options = {
    method: "POST",
    headers: {
      "X-API-KEY": "YOUR_API_KEY",
      "Content-Type": "application/json",
    },
    body: '{"credentialSubjectSchema":[{"name":"course","type":"string"},{"name":"passed","type":"bool"}]}',
  };
  
  fetch("https://staging.crossmint.com/api/unstable/credentials/types", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  