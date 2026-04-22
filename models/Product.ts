import mongoose, { Schema, Document } from 'mongoose';
import { Product } from '@/types';

export type ProductDocument = Product & Document;

const ProductSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    model: { type: String, required: true },
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ['single', 'double', 'apple', 'specialty'],
      required: true,
    },
    floorArea: { type: String },
    floors: { type: Number },
    guests: { type: String },
    weight: { type: String },
    image: { type: String, required: true },
    images: [{ type: String }],
    specs: [
      {
        label: { type: String },
        value: { type: String },
      },
    ],
    featured: { type: Boolean, default: false },
    badge: { type: String },
    size: { type: String },
    description: { type: String },
    useCase: { type: String },
  },
  { timestamps: true }
);

const ProductModel =
  mongoose.models['Product'] ||
  mongoose.model('Product', ProductSchema);

export default ProductModel;
