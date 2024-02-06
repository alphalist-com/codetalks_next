export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const body = await readBody(event);

  const response = await fetch(
    `https://codetalks.de/user/${body.speakerId}?event=all&type=speaker`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-csrf-token": "rMlJgbPghZOzsuVruWcYwqdzFdnxlWSvp1B3zfNv",
        "x-requested-with": "XMLHttpRequest",
        "x-xsrf-token":
          "eyJpdiI6IkxwTnlQWDVsdlJzZnRTVTRCaTFmbnc9PSIsInZhbHVlIjoick9wb2J4NlF1eG9vN1wvandhNkwwNlhXdERFcDFBVDh6cnlSOWRlVXNydGt5SVp0Vk1DdWNuVUp4aG9PcDdCUFNBME1rZUpUWDdLOGk0QkEzUmh0ZTlXVjYwendYNFJPVlJkcXBYOFVrZkxXZWp1ZXRlc0xNdmdQXC9YMjBXeW5ORCIsIm1hYyI6IjYwMzcyM2VhYTUxYzgyZWE4ZWRiYThmODk0MjJiZWQzZGE1YmZlZDM4ZDEwNzgwZTk0MzUxMmIzMWUxOWViODgifQ==",
      },
      referrer: "https://codetalks.de/speakers",
      referrerPolicy: "unsafe-url",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "include",
    }
  );

  console.log(`Successfully subscribed`, response);

  let message = await response.json();
  return { success: true, speakerDetails: message };
});
