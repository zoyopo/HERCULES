"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class CLI {
    constructor() {
        const { exec } = require("child_process");
        this.excutor = exec;
    }
    exec(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cmd, dir, callback } = params;
            const path = require("path");
            const { err, stdout, stderr } = yield this.excutor(cmd, {
                cwd: path.join(process.cwd(), dir || ''),
            });
            callback({ err, stdout, stderr });
        });
    }
}
exports.default = CLI;
