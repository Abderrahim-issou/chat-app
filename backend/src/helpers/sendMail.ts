import nodeMailer from 'nodemailer'


const sendEmail = async (email: string, url: string ) => {
    
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: "abderrahimissou685@gmail.com",
            pass: 'tmmp tass trug eqzt'
        }
    });

    const mailOptions = {
        from: '"Creere Lunch" <abderrahimissou685@gmail.com>',
        to: email,
        subject: 'Password reset request',
        text: `please copy this link and paste it in your browser search bar to reset you password ,${url}`,
        html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8" />
                <style>
                  .container {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    max-width: 600px;
                    margin: auto;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                  }
                  .btn {
                    display: inline-block;
                    padding: 10px 20px;
                    margin-top: 20px;
                    background-color: #007bff;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                  }
                  .footer {
                    margin-top: 30px;
                    font-size: 12px;
                    color: #777;
                  }
                </style>
              </head>
              <body>
                <div class="container">
                  <h2>Password Reset Request</h2>
                  <p>Hello,</p>
                  <p>We received a request to reset your password. Click the button below to set a new password:</p>
                  <a href="${url}" class="btn">Reset Password</a>
                  <p>If you didn't request a password reset, you can safely ignore this email.</p>
                  <div class="footer">
                    <p>© 2025 Your App. All rights reserved.</p>
                  </div>
                </div>
              </body>
            </html>`
    }
    const emailSended = transporter.sendMail(mailOptions);
    return emailSended;
}

export default sendEmail;