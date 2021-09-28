const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Conexion a la base de datos en linea');

    } catch (e) {
        console.log("🚀 ~ file: config.js ~ line 20 ~ dbConnection ~ e", e);
        throw new Error('Error en la conexion de base de datos');
    }
};

module.exports = dbConnection;