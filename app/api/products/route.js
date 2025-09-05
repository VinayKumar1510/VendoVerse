import { NextResponse } from 'next/server';
import dbconnect from '@/lib/dbConnect';
import Product from '@/models/Product';

// GET all products (public)
export async function GET() {
  try {
    await dbconnect();
    const products = await Product.find({})
      .sort({ createdAt: -1 }); // latest first

    return NextResponse.json(
      { success: true, products },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ GET /api/products error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// POST new product (public)
export async function POST(req) {
  try {
    await dbconnect();
    const body = await req.json();

    const { name, price, category } = body;

    // ✅ Validation
    if (!name || !price || !category) {
      return NextResponse.json(
        { success: false, message: "Name, Price, and Category are required" },
        { status: 400 }
      );
    }

    // ✅ Only save selected fields (no image)
    const newProduct = await Product.create({
      name,
      price,
      category
    });

    return NextResponse.json(
      { success: true, product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ POST /api/products error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
