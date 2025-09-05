// app/api/sellers/check/route.js
import dbconnect from '@/lib/dbConnect';
import Seller from '@/models/Seller';

export async function GET(req) {
  try {
    await dbconnect();
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!email) {
      return new Response(JSON.stringify({ exists: false }), { status: 400 });
    }

    const sellerExists = await Seller.findOne({ email: email.toLowerCase() });
    return new Response(JSON.stringify({ exists: !!sellerExists }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
