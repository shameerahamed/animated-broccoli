import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  surname: {
    type: String
  },
  annual: {
    type: Number
  },
  sick: {
    type: Number
  },
  bereavement: {
    type: Number
  },
  familyCare: {
    type: Number
  },
  christmas: {
    type: Number
  },
  maternity: {
    type: Number
  },
  paternity: {
    type: Number
  },
  designation: {
    type: String
  },
  gender: {
    type: String
  },
  dateOfBirth: {
    type: String
  },
  employeeNumber: {
    type: Number
  },
  isArchived: {
    type: Boolean
  },
  archiveReason: {
    type: String
  }
});

export default mongoose.model('user', userSchema);