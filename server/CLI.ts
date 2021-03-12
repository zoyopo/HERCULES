class CLI {
  constructor() {
    const { exec } = require("child_process");
    this.excutor = exec;
  }

  public excutor: any;

  async exec(params:{cmd: string, dir?: string, callback: Function}) {
     const {cmd,dir,callback} = params
    const path = require("path");
    const { err, stdout, stderr } = await this.excutor(cmd, {
      cwd: path.join(process.cwd(), dir||''),
    });
    callback({ err, stdout, stderr });
  }
}

export default CLI
