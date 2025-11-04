import MyEmail from "@/emails/my-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendSampleEmailStep() {
  "use step";

  console.log("Sending sample email");

  try {
    const { data, error } = await resend.emails.send({
      from: "alice@someone.com",
      to: ["bob@someone.com"],
      subject: "Hello world",
      react: MyEmail(),
    });

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    console.log(data);
    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
