import mongoose from 'mongoose';

const SellerSchema = new mongoose.Schema({
  name: String,
  email: String,
  countryCode: String,
  phone: String,
  businessName: String,
  description: String,
}, { timestamps: true });

export default mongoose.models.Seller || mongoose.model('Seller', SellerSchema);
