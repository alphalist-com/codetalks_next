export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const response = await fetch(
    `https://app.codetalks.com/sponsor-category/for-event?event=${config.cota.currentEventId}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
      },
      referrer: "https://app.codetalks.com/partners",
      referrerPolicy: "unsafe-url",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "include",
    },
  );

  let message = await response.json();
  console.log(
    `Partners for event ${config.cota.currentEventId} loaded`,
    message,
  );

  return { success: true, partners: message };
});
