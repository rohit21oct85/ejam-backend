"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var TemplateSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    deployed: {
        type: Date,
        "default": new Date
    },
    versions: {
        "type": Array,
        "minItems": 1,
        "uniqueItems": true,
        "required": true,
        "items": {
            "type": "string"
        }
    }
}, {
    timestamps: true,
    versionKey: false
});
exports["default"] = mongoose.model('Template', TemplateSchema);
