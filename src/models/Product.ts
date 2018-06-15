import {Document, Model, model, Schema, Types} from "mongoose";

const collectionName = 'product';

interface IProduct extends Document {
  title: string;
}

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  }
}, {pluralize: false, collection: String(collectionName)});

type ProductModel = Model<IProduct> & IProduct;

const Product: ProductModel = model<IProduct>(String(collectionName), productSchema) as ProductModel;

export {
  Product,
  IProduct,
}