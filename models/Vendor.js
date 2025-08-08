import mongoose from 'mongoose';

const VendorSchema = new mongoose.Schema({
  name: String,
  tagline: String,
  slug: String,
  logo: String,
}, { timestamps: true });

export default mongoose.models.Vendor || mongoose.model('Vendor', VendorSchema);
