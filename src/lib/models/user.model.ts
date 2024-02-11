import mongoose from "mongoose";
import { string } from "zod";

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    company: {
        cin: {
            type: String,
            required: true
        },
        establishment: {
            type: Date,
            required: true
        },
        contact: {
            type: Number,
            required: true,
        },
        bio: {
            type: String,
            required: true,
        },
        companyEmail: {
            type: String,
            required: true
        },
        image: String,
        name: {
            type: String,
            required: true,
            unique: true
        },
    },

    ownerDetails: {

        ownerContact: {
            type: Number,
            required: true,
        },
        firstname: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true,
        },
        dob: {
            type: Date,
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        ownerBio: {
            type: String,
            required: true,
        },
    },

    onboarded: {
        type: Boolean,
        default: false,
    },
    trades: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Trades',
        }
    ],
    emissions: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Emissions'
    },

    links: {
        linkedIn: {
            type: String,
        },
        instagram: {
            type: String,
        },
        website: {
            type: String,
        },
        twitter: {
            type: String,
        }
    },

})

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;