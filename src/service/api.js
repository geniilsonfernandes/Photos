const apikey = "563492ad6f91700001000001f0f1f74ec6814572866d9f6207bcd52d";
//"https://api.pexels.com/v1/curated?page=1&per_page=15",
//?orientation=landscape&color=F44336

export async function getImages() {
  const response = await fetch(
    "https://api.pexels.com/v1/search?query=nature&per_page=15&color=F44336&orientation=landscape",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: apikey,
      },
    }
  );
  const data = await response.json();
  return data;
}
export async function searchImages(query, params) {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${query}${params}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: apikey,
      },
    }
  );
  const data = await response.json();
  return data;
}
