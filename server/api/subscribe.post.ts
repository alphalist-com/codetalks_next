export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const listId: string = config.mailchimp.listId
  const apiKey: string = config.mailchimp.apiKey

  const body = await readBody(event)
  
  const response = await fetch(`https://us14.api.mailchimp.com/3.0/lists/${listId}/members`, {
    method: 'POST',
    headers: {
      'Authorization': `apikey ${apiKey}`,
      'Content-Type': 'application/json'
    },  
    body: JSON.stringify(
      {
        email_address: body.email,
        status: 'pending',
        tags: [ 'subscriber' ],
      }
    )
  });

  console.log(`Successfully subscribed`, body);

  let message = await response.text()
  return { success: true, res: message }
})