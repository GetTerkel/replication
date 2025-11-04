import { sendSampleEmailStep } from "./steps";

export async function sampleWorkflow() {
  "use workflow";

  const result = await sendSampleEmailStep();

  return { success: true, result };
}
