import fs from "node:fs";
import path from "node:path";

export function ensureHeroImage() {
  try {
    const src = "C:\\Users\\Mohamed Khaled\\.gemini\\antigravity-ide\\brain\\e9b99b6a-98e5-4eab-9dff-4d5b34ba7f11\\hero_dental_clinic_1792270716210.jpg";
    const destDir = path.resolve(process.cwd(), "public/images");
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    const dest = path.join(destDir, "hero_dental_clinic.jpg");
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    }
  } catch (err) {
    console.error("Failed to copy hero image:", err);
  }
}

ensureHeroImage();
