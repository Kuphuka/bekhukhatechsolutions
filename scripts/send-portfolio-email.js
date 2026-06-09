import nodemailer from "nodemailer";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const EMAIL_CONFIG = {
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "your-gmail@gmail.com",
    pass: process.env.EMAIL_PASS || "your-app-password",
  },
};

const PORTFOLIO_URL = process.env.PORTFOLIO_URL || "http://localhost:5173/portfolio-pdf";
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "emmanuelkhupuka@gmail.com";
const PDF_OUTPUT = path.join(__dirname, "bekhukha-portfolio.pdf");

async function generatePortfolioPDF() {
  console.log("🚀 Starting PDF generation...");
  
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    console.log(`📄 Loading: ${PORTFOLIO_URL}`);
    await page.goto(PORTFOLIO_URL, { waitUntil: "networkidle2" });
    
    console.log("🖨️  Generating PDF...");
    await page.pdf({
      path: PDF_OUTPUT,
      format: "A4",
      printBackground: true,
      margin: { top: 20, right: 20, bottom: 20, left: 20 },
    });
    
    await browser.close();
    console.log(`✅ PDF saved to: ${PDF_OUTPUT}`);
    return PDF_OUTPUT;
  } catch (error) {
    console.error("❌ PDF generation failed:", error);
    throw error;
  }
}

async function sendEmailWithPDF(pdfPath) {
  console.log("📧 Configuring email...");
  
  const transporter = nodemailer.createTransport(EMAIL_CONFIG);
  
  const mailOptions = {
    from: EMAIL_CONFIG.auth.user,
    to: RECIPIENT_EMAIL,
    subject: "Bekhukha Tech Solutions - Company Portfolio",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2>📋 Your Company Portfolio</h2>
        <p>Hi there,</p>
        <p>Please find attached your complete Bekhukha Tech Solutions company portfolio in PDF format.</p>
        <p><strong>What's included:</strong></p>
        <ul>
          <li>Services & Pricing</li>
          <li>Recent Projects</li>
          <li>Company Overview</li>
          <li>Team Information</li>
          <li>Contact Details</li>
        </ul>
        <p>Feel free to share this with clients, partners, or stakeholders.</p>
        <br>
        <p>Best regards,<br><strong>Bekhukha Tech Solutions</strong></p>
      </div>
    `,
    attachments: [
      {
        filename: "Bekhukha-Portfolio.pdf",
        path: pdfPath,
      },
    ],
  };
  
  try {
    console.log(`📤 Sending email to ${RECIPIENT_EMAIL}...`);
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully! Message ID: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    throw error;
  }
}

async function main() {
  console.log("========================================");
  console.log("  Bekhukha Portfolio PDF Generator");
  console.log("========================================\n");
  
  try {
    const pdfPath = await generatePortfolioPDF();
    await sendEmailWithPDF(pdfPath);
    console.log("\n✨ Done! Portfolio PDF has been emailed.");
  } catch (error) {
    console.error("\n❌ Error:", error.message);
    process.exit(1);
  }
}

main();
