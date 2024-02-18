const options = {
    method: "POST",
    headers: {
      "X-API-KEY": "sk_production_9tW6CCCcaf24zi66M2GcoxfKaVBRWGaZ9KSSGzCUiafxriJVQ6U1DAD2asiyS4gwgojTGdYx2nBfj3vZ3JzE9GQskEb6wd2vmbgCMje3ZcPGieKGogaqtGWaiZ65DjEcpN8s7kjXCpotVTfcrTs9dAjdmxAXJRdELgJqg7QKBaSFQb8NB9Lh5ovGYUoP9oNjBvrXy5F1akskvnoHHS7EpbC9",
      "Content-Type": "application/json",
    },
    body: '{"credentialSubjectSchema":[{"name":"course","type":"string"},{"name":"passed","type":"bool"}]}',
  };
  
  fetch("https://staging.crossmint.com/api/unstable/credentials/types", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  