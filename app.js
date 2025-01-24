import express from 'express';
import { Sequelize, DataTypes } from 'sequelize';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Olá mundo');
});

app.post('/user', async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.create({ name, email });
        return res.status(201).json(user);
    } catch (error) {
        console.log(error);
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll()

        return res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json('Erro ao listar usuários')
    }
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});

const sequelize = new Sequelize('mysql://root:senha123@mysql:3306/database');
export const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Banco de Dados Autenticado');
    } catch (error) {
        console.log(`Erro ao Autenticar - ${error}`);
    }
}

connection(); 

const User = sequelize.define('user', 
    {
        name:  {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

