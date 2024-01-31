import { MailchimpService } from "~/services/mailchimp";

export default defineEventHandler(async (event) => {
  
  const mailchimpService = new MailchimpService();
  const { email } = await readBody(event);

  console.log(email);

  if (!email) {
    return createError({ statusCode: 400, message: "Email is required" });
  }

  return {
    success: true,
    message: "Subscription successful",
  };

  try {
    const response = await mailchimpService.subscribe(email);
    return {
      success: true,
      message: "Subscription successful",
      data: response,
    };
  } catch (error) {
    console.error("Subscription error:", error);
    return createError({ statusCode: 500, message: "Internal Server Error" });
  }
});
