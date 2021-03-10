function FileListPlugin(options){

}

FileListPlugin.prototype.apply=function(compiler){

  compiler.plugin('emit',function(compilation,cb){
    // =====fileList==================ST
      var fileList='in this build :\n\n'
      
      for (var filename in compilation.assets){
        fileList+=('-'+filename+'\n')
      }

      // ========filelist==========ED
   

        // //#region  depenciesPath

        //  compilation.chunks.forEach(chunk => {
        //    chunk.modules.forEach(module=>{
                
        //    })
        //  }); 

        // //#endregion
   


      
      compilation.assets['filelist.md']={
        source:function(){
          return fileList
        },
        size:function(){
          return fileList.length
        }
      }
      cb()
  })
}
module.exports=FileListPlugin