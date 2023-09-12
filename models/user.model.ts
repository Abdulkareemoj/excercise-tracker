import { model, Schema } from "npm:mongoose@^6.7";

// Define schema.
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

// Validations
userSchema.path("username").required(true, "user name cannot be blank.");


export default model('User', userSchema);