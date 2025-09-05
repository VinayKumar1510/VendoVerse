import { NextResponse } from 'next/server';
import dbconnect from '@/lib/dbConnect';
import Seller from '@/models/Seller';

export async function POST(req) {
  try {
    await dbconnect();
    const data = await req.json();

    // Check if seller with same email OR phone already exists
    const existingSeller = await Seller.findOne({
      $or: [{ email: data.email }, { phone: data.phone }],
    });

    if (existingSeller) {
      return NextResponse.json(
        { message: 'Seller already exists with this email or phone' },
        { status: 409 } // Conflict
      );
    }

    // If no existing seller, create a new one
    await Seller.create(data);

    return NextResponse.json(
      { message: 'Seller created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Failed to create seller' },
      { status: 500 }
    );
  }
}
