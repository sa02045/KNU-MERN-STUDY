import mongoose from 'mongoose';

const knutalkSchema = mongoose.Schema({
    name: String,
    text: String,
});

export default mongoose.model('message', knutalkSchema);