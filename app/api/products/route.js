import { NextResponse } from "next/server";
import dbconnect from "@/lib/dbConnect";
import Product from "@/models/Product";

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

// POST new product with Base64 image
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

    // Convert file to Base64
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;

    // Save product in MongoDB
    const newProduct = await Product.create({
      name,
      price,
      category,
      image: base64Image,
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
