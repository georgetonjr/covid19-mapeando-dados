const path = "https://coronavirus-19-api.herokuapp.com/countries";

const headers = {
  method: "get",
  mode: "cors",
  cache: "default",
};

function getCoutry(country) {
  return fetch(`${path}/${country}`, headers).then((res) => res.json());
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getCoutry,
};
