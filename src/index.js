const express = require('express');
const bodyParser = require('body-parser')

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const UserService = require('./services/user-service');

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server is running on port ${PORT}`);

        const service = new UserService();
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cmVuZHJhQGFkbWluLmNvbSIsImlkIjoxLCJpYXQiOjE3NjU2MTc3NjIsImV4cCI6MTc2NTYyMTM2Mn0.8NCBHxqPOiS8ex_yqyYP6NgipApXJS-7tQjoIjebBMQ';
        const response = service.verifyToken(token);
        console.log(response);
    });
};

prepareAndStartServer();