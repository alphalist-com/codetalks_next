import axios, { type AxiosResponse } from 'axios';

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

interface MailchimpSubscribeResponse {
  // Define the response structure expected from Mailchimp
}

export class MailchimpService {
  async subscribe(email: string): Promise<MailchimpSubscribeResponse> {
    const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;
    const data = {
      email_address: email,
      status: 'subscribed', // or 'pending' for double opt-in
    };

    try {
      const response: AxiosResponse<MailchimpSubscribeResponse> = await axios.post(url, data, {
        headers: {
          'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      return response.data;
    } catch (error) {
      // Handle and throw errors appropriately
      throw new Error('Failed to subscribe to Mailchimp');
    }
  }
}
