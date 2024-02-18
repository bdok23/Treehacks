const options = {
    method: "POST",
    headers: {
      "X-API-KEY": "sk_staging_5zsrMa8dDpvcT5xkFSWxGBLCefNbdvxSDYBnVCXiyz4fd95nW9MvC934Upr68KVFhzkQ2SkNanJdMyS8d3vZiAgBvVeJ8HyAH1PSLEVSEELr9AofWCYoQuWsg9Ux7aGyR7soK4XxALxK7bhcFXb7HCBGPZWkogZSgmWzBWcZ3vcWqtYMBcFEZkDLcdWBQWa1LJKtcpR5VZ4WXgK6n5JNJRjz",
      "Content-Type": "application/json",
    },
    body: '{"chain":"polygon","credentials":{"type":"urn:uuid:1a1a562a-5550-494b-9826-4c4adc5f6894"},"metadata":{"name":"VC Collection Name QS","description":"Test"}}',
  };
  
  fetch("https://staging.crossmint.com/api/unstable/collections/", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  