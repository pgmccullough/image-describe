import 'dotenv/config'

const { 
  IMAGGA_API_KEY: apiKey, 
  IMAGGA_API_SECRET: apiSecret, 
  IMAGGA_API_ENDPOINT: apiEndpoint
} = process.env;

export const scanImage = async (imageUrl: string): Promise<string> => {
  try {
    const url = `${apiEndpoint}${encodeURIComponent(imageUrl)}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Basic ${btoa(`${apiKey}:${apiSecret}`)}`
      }
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};
