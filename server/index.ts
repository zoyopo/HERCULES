const koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
import CLI from './CLI'
const app = new koa();
// post 中间件
app.use(bodyParser());
const router = new Router();

type ControllerParams = [any, Function];

router.get("/hello/:name", async (...routerParams: ControllerParams) => {
  const [ctx, next] = routerParams;
  var name = ctx.params.name;
  ctx.response.body = `hello ${name}`;
});

router.get("/", async (...routerParams: ControllerParams) => {
  const [ctx, next] = routerParams;
  ctx.res.body = `hello world`;
});

router.post("/setProxy", async (...routerParams: ControllerParams) => {
  //console.log('routerParams',routerParams)
  
  const CLIIns=new CLI()
  
  const [ctx, next] = routerParams;
  const proxyAddressFrom = ctx.request.body.proxyAddressFrom;
  const proxyAddressTo = ctx.request.body.proxyAddressTo;
  CLIIns.exec({cmd:'node test.js',callback:(err:boolean,stout:any)=>{
    if(!err){
      console.log('stout',stout)
    }else{
      console.log('err',err)
    }
  }})
  console.log(proxyAddressFrom, proxyAddressTo);
  ctx.response.body = JSON.stringify({ ret: 0 });
});

app.use(router.routes());

app.listen(3888, () => {
  console.log("app is running");
});
