export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const body = await readBody(event);
  const url = `https://app.codetalks.com/speaker/all-speakers?count=10&exclude_ids=${body.excludeIds}`;

  console.log("exclude speakerIds: ", body.excludeIds);

  const response = await fetch(url, {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
    },
    referrer: "https://app.codetalks.com/speakers",
    referrerPolicy: "unsafe-url",
    body: null,
    method: "GET",
  });

  let newSpeakers = await response.json();

  console.log("sp", newSpeakers);
  let consolidatedNewSpeakers = newSpeakers.map((speaker) => ({
    name: speaker.full_name,
    position: speaker.position,
    company: speaker.company.name,
    image: `https://cota.fra1.cdn.digitaloceanspaces.com/${speaker.thumbnail_url}`,
    detailedInfos: speaker.user_id,
  }));
  return { success: true, newSpeakers: consolidatedNewSpeakers };
});
