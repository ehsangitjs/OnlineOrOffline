const {app,BrowserWindow} = require('electron')
app.on('ready',()=>{
    const main = new BrowserWindow({
        width:300,
        height:300,
        minWidth:300,
        minHeight:300,
        maxWidth:300,
        maxHeight:300,
        frame:false,
        title:'OnlineOrOffline',
        alwaysOnTop:true,
        icon:"icon.ico"
    })
    main.loadFile('index.html')
})