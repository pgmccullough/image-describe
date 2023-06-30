import { scanImage } from './scanImage';
import { openAIReq } from './openAIReq';

export const imageDescribe = async(imageUrl: string): Promise<string> => {
  const imageData = await scanImage(imageUrl);
  const imageDescription = await openAIReq(imageData);
  return imageDescription.response.status + imageDescription.response.statusText;
};
