import mongoose from "mongoose";

const tradeSchema=new mongoose.Schema({
date:{
    type:Date,
    default:Date.now,
},
broughtFrom:{
    type:String,
    required:true,
},
broughtBy:{
    type:String,
    required:true
},
CCB:{
    type:Number,
    required:true,
},
TotalCC:{
    type:Number,
    required:true,
},
status:Boolean,
})

const Trades=mongoose.models.Trades || mongoose.model('Trades',tradeSchema);

export default Trades;
