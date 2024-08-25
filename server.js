const dbConnect = require('./mongodb');
// console.warn(dbConnect());
/* handle promises use then*/
// dbConnect().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.warn(data);
//     })
// })
// dbConnect();

/* latest code for handle promises */
const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}
main()