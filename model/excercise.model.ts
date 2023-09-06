import { model, Schema } from "npm:mongoose@^6.7";

// Define schema.
const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});


// Validations
 exerciseSchema.path("name").required(true, "Name cannot be blank.");
 exerciseSchema.path("description").required(true, "Description cannot be blank.");

export default model('Exercise', exerciseSchema);