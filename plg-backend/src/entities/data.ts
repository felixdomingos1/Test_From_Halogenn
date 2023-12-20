import mongoose, { Schema, Document } from 'mongoose';

export interface IData extends Document {
  nome: string;
  valor: number;
  nota: string;
}

const DataSchema: Schema = new Schema({
  nome: { type: String, required: true },
  valor: { type: Number, required: true },
  nota: { type: String, required: true },
});

export default mongoose.model<IData>('Data', DataSchema);
