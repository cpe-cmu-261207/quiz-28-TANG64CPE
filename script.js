async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  console.log(resp.data.result);
  const name = [];
  const address = [];
  for (const key in resp.data.result) {
    name.push(resp.data.name[key]);
    address.push(key);
  }
}

const name = document.getElementById("p-name");
const hideuser = document.getElementById("div_user_card");
const loadingcard = document.getElementById("div_loading_card");
