import { sendSampleEmailStep } from "./steps";

export async function sampleWorkflow() {
  "use workflow";

  await sendSampleEmailStep();

  return { success: true };
}
