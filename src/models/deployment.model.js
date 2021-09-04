"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var DeploymentSchema = new mongoose_1.Schema({
    template: {
        type: String,
        required: true
    },
    deployed: {
        type: Date,
        "default": new Date
    },
    url: {
        type: String
    },
    versions: {
        "type": String
    }
}, {
    timestamps: true,
    versionKey: false
});
exports["default"] = mongoose.model('Deployment', DeploymentSchema);
