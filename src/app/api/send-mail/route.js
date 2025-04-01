import nodemailer from "nodemailer";

const sendEmail = async (formData) => {
  try {
    const { name, email, mobile, message } = formData;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "hopesalive1242@gmail.com", // Replace with your Gmail email
        pass: "stylesurekha123", // Replace with your Gmail password or an app-specific password
      },
    });

    // Compose email message
    const mailOptions = {
      from: "bhosvivek123@gmail.com",
      to: "hopesavlie1242@gmail.com", // Replace with the desired email address
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true, message: "Email sent successfully." };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Error sending email." };
  }
};
