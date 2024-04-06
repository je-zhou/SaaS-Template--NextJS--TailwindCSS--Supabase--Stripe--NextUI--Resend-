import SignUpEmail from "@/emails/sign_up_email";
import { Resend } from "resend"

const resendKey = process.env.NEXT_PUBLIC_RESEND_API_KEY || ''
const resend = new Resend(resendKey);

export type ResendResponse = {
    detail: string
    status: number
}

export class ResendClient {
  static async sendOrderReceivedEmail(email: string ): Promise<ResendResponse> {
    try {        
      await resend.emails.send({
        from: 'Jerry Zhou <jerry.zhou07@gmail.com>',
        to: email,
        subject: `Thanks for your order!`,
        react: SignUpEmail({email: email}),
      });

      return {detail: "Email sent", status: 200};

    } catch (error) {
      console.log(error);

      return {detail: "Couldn't send email", status: 500}
    }
  }
}