function global() {
  var obj = {};
  obj.BaseAPIURL = "https://bookstoreserviceapi.azurewebsites.net/api/";
  // obj.BaseAPIURL = "http://localhost:54701/api/";
  obj.language = "en";
  return obj;
}

export default global;
