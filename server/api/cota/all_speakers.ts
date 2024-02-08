export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const body = await readBody(event);
  const url = `https://codetalks.de/speaker/all-speakers?count=10&exclude_ids=${body.excludeIds}`;

  console.log('exclude speakerIds: ',body.excludeIds);

  const response = await fetch(
    `https://codetalks.de/speaker/all-speakers?count=10&exclude_ids=[${body.excludeIds}]`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
      },
      referrer: "https://codetalks.de/speakers",
      referrerPolicy: "unsafe-url",
      body: null,
      method: "GET",
    }
  );

  let newSpeakers = await response.json();

  console.log('sp', newSpeakers);
  let consolidatedNewSpeakers = newSpeakers.map((speaker) => ({
    name: speaker.full_name,
    position: speaker.position,
    company: speaker.company.name,
    image: `https://codetalks.de/${speaker.photo_url}`,
    detailedInfos: speaker.user_id,
  }));  
  return { success: true, newSpeakers: consolidatedNewSpeakers };
});
