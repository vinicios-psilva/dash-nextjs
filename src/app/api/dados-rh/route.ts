import { NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3Client, BUCKET_NAME } from "@/lib/aws";

export const dynamic = 'force-dynamic';

const streamToString = (stream: any) =>
  new Promise((resolve, reject) => {
    const chunks: any[] = [];
    stream.on("data", (chunk: any) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });

export async function GET() {
  try {
    console.log("🟡 API: Buscando dados no S3...");
    
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: "dashboard_data.json", 
    });

    const response = await s3Client.send(command);
    
    const bodyContents = await streamToString(response.Body);
    const data = JSON.parse(bodyContents as string);
    
    console.log("🟢 API: Sucesso!", data);

    return NextResponse.json(data);

  } catch (error: any) {
    console.error("🔴 API Erro:", error);
    return NextResponse.json(
        { error: "Falha ao carregar dados", detalhe: error.message }, 
        { status: 500 }
    );
  }
}