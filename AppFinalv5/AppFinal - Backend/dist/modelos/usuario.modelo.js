"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const mongoose_1 = require("mongoose");
const usuarioSchema = new mongoose_1.Schema({
    usuario: { type: String, unique: true, uniqueCaseInsensitive: true, trem: true },
    email: { type: String, unique: true, uniqueCaseInsensitive: true, trem: true },
    pwd: { type: String },
    role: [{ type: String }]
}, {
    timestamps: true
});
exports.Usuario = (0, mongoose_1.model)('usuario', usuarioSchema);
