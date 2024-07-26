"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kill_port_1 = __importDefault(require("kill-port"));
const port = 3000;
(0, kill_port_1.default)(port)
    .then(() => {
    console.log(`Port ${port} was successfully killed.`);
})
    .catch((err) => {
    console.error(`Failed to kill port ${port}:`, err);
});
