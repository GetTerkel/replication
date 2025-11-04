import { sampleWorkflow } from "@/workflows/sample";
import { NextResponse } from "next/server";
import { start } from "workflow/api";

export async function GET() {
  // Executes asynchronously and doesn't block your app
  const result = await start(sampleWorkflow);

  await result.returnValue;

  return NextResponse.json({
    message: "Sample workflow finished",
  });
}
