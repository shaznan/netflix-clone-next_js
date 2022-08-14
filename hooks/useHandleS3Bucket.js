import { Storage } from "aws-amplify";

const useHandleS3Bucket = () => {
  const getBucketUrl = async (fileKey, type, isDownload = false) => {
    return await Storage.get(fileKey, {
      download: isDownload,
      contentType: type,
      expires: 18000,
    });
  };

  return { getBucketUrl };
};

export default useHandleS3Bucket;
