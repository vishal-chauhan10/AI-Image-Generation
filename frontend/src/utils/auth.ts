import { google } from 'googleapis';

export async function getGoogleAccessToken() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      // Your service account credentials
      client_email: "your-service-account@project.iam.gserviceaccount.com",
      private_key: "your-private-key"
    },
    scopes: ['https://www.googleapis.com/auth/cloud-vision']
  });

  const client = await auth.getClient();
  const token = await client.getAccessToken();
  return token.token;
} 