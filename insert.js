const dbConnect = require('./mongodb');

const insertData = async () => {
    // console.log("insert function");
    let data = await dbConnect();
    let result = await data.insertMany(
        [
        {name:'max pro', brand:'realme', price:500, category:'mobile'},
        {name:'m ui', brand:'redmi', price:320, category:'mobile'}
        ]
    );
    if(result.acknowledged) {
        console.log("data inserted");
        
    }
    
}
insertData();