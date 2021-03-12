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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const CLI_1 = __importDefault(require("./CLI"));
const app = new koa();
// post 中间件
app.use(bodyParser());
const router = new Router();
router.get("/hello/:name", (...routerParams) => __awaiter(void 0, void 0, void 0, function* () {
    const [ctx, next] = routerParams;
    var name = ctx.params.name;
    ctx.response.body = `hello ${name}`;
}));
router.get("/", (...routerParams) => __awaiter(void 0, void 0, void 0, function* () {
    const [ctx, next] = routerParams;
    ctx.res.body = `hello world`;
}));
router.post("/setProxy", (...routerParams) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log('routerParams',routerParams)
    const CLIIns = new CLI_1.default();
    const [ctx, next] = routerParams;
    const proxyAddressFrom = ctx.request.body.proxyAddressFrom;
    const proxyAddressTo = ctx.request.body.proxyAddressTo;
    CLIIns.exec({ cmd: 'node test.js', callback: (err, stout) => {
            if (!err) {
                console.log('stout', stout);
            }
            else {
                console.log('err', err);
            }
        } });
    console.log(proxyAddressFrom, proxyAddressTo);
    ctx.response.body = JSON.stringify({ ret: 0 });
}));
app.use(router.routes());
app.listen(3888, () => {
    console.log("app is running");
});
