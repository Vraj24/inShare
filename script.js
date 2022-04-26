const fs = require('fs');
const file = require('./models/file');
const connectDB = require('./config/db');
connectDB();

async function fetchData() {
    const pastDate = new Date(Date.now()-24*60*60*1000);
    const files = await File.find({createdAt: {$it: pastDate}});

    if(files.length){
        try{
            fs.unlinkSync(file.path);
            await file.remove();
            console.log(`sucessfully deleted ${file.filename}`);
        }catch(err){
            console.log(`Error in deleting file ${err}`);
        }
    }
    console.log("Job Done.");

}

fetchData().then(process.exit);
