import { NextResponse } from "next/server";
import dbconnect from "@/lib/dbConnect";
import Product from "@/models/Product";
import fs from "fs/promises";
import path from "path";

// GET all products
export async function GET() {
  try {
    await dbconnect();
    const products = await Product.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, products }, { status: 200 });
  } catch (error) {
    console.error("❌ GET /api/products error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// POST new product
export async function POST(req) {
  try {
    await dbconnect();

    const formData = await req.formData();
    const name = formData.get("name");
    const price = formData.get("price");
    const category = formData.get("category");
    const file = formData.get("image");

    if (!name || !price || !category || !file) {
      return NextResponse.json(
        { success: false, message: "Name, Price, Category, and Image are required" },
        { status: 400 }
      );
    }

    // Save the uploaded file to public/uploads
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadDir = path.join(process.cwd(), "public/uploads");
    await fs.mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, file.name);
    await fs.writeFile(filePath, buffer);

    const imagePath = `/uploads/${file.name}`;

    const newProduct = await Product.create({
      name,
      price,
      category,
      image: imagePath,
    });

    return NextResponse.json({ success: true, product: newProduct }, { status: 201 });
  } catch (error) {
    console.error("❌ POST /api/products error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
