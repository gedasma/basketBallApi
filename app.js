const express = require('express');
const app = express();
app.use(express.json())
const participantRoutes = require('./routes/participantRoutes')
const userRoutes = require('./routes/userRoutes')
const teamRoutes = require('./routes/teamRoutes')
const morgan = require('morgan')


app.use(morgan('dev'))
 
 
//Mounting router
app.use('/api',userRoutes);
app.use('/api/participants',participantRoutes);
app.use('/api/team',teamRoutes);

module.exports = app