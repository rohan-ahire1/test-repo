import userService from './userService.js';

const userController = {
    getUsers: async (req, res) => {
        try{
        const users = await userService.getUsers();
        res.json(users);
    }catch(error){
        res.status(500).json({ error: 'Error querying the database' });
    }
}
};

export default userController;
