import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { email, name, msg } = req.body;

        if (!email || !name || !msg) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        //mail server
        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "285b50eddb0a2d",
                pass: "9dd1c52f772487",
            },
        });

        transport.sendMail({
            from: 'default@gmail.com',
            to: 'lynnhtinnyein@gmail.com',
            subject: email + ' / ' + name,
            text: msg,
            html: 'default html'
        }).then( () => {
            return res.status(200).json({ message: "Email sent successfully" });
        }).catch( () => {
            return res.status(500).json({ message: "Email cannot be sent" });
        });
    } else {
        return res.status(405).json({ error: "Method not allowed" });
    }
}
