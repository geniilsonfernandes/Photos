const apikey = "563492ad6f91700001000001f0f1f74ec6814572866d9f6207bcd52d";

export async function getImages() {
  let data;
  const response = await fetch(
    "https://api.pexels.com/v1/curated?page=1&per_page=15",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: apikey, //use the apikey you have generated
      },
    }
  );
  data = await response.json();
  return data;
}
