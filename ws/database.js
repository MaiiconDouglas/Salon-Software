const mongoose= require('mongoose');
const URI = 'mongodb+srv://salaoUser:tMFTH3u5gNRd5Jiy@maiicondouglasd.j6tba.mongodb.net/salao-na-mao?retryWrites=true&w=majority';
// senha da base de dados tMFTH3u5gNRd5Jiy
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose
.connect(URI)
.then( ( ) => console.log('  DB is UP! '))
.catch( ( ) => console.log(err));
