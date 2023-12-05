import AWS from "aws-sdk";

const s3Bucket = new AWS.S3({
  accessKeyId: "AKIAZW5VYF4BVC2A2N7H",
  secretAccessKey: "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",
  region: "ap-south-1"
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject)=>
    s3Bucket.upload(options, (error,data)=>{
      if(error) return reject(error);
      return resolve(data);
    })
  );
};