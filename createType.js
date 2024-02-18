const options = {
    method: "POST",
    headers: {
      "X-API-KEY": "sk_staging_5zsrMa8dDpvcT5xkFSWxGBLCefNbdvxSDYBnVCXiyz4fd95nW9MvC934Upr68KVFhzkQ2SkNanJdMyS8d3vZiAgBvVeJ8HyAH1PSLEVSEELr9AofWCYoQuWsg9Ux7aGyR7soK4XxALxK7bhcFXb7HCBGPZWkogZSgmWzBWcZ3vcWqtYMBcFEZkDLcdWBQWa1LJKtcpR5VZ4WXgK6n5JNJRjz",
      "Content-Type": "application/json",
    },
    body: '{"credentialSubjectSchema":[{"name":"course","type":"string"},{"name":"passed","type":"bool"}]}',
  };
  
  fetch("https://staging.crossmint.com/api/unstable/credentials/types", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  