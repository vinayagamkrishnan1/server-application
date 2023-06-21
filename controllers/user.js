const createUser = async(request, response) => {
    try {
        response.json({
            message: "User created."
        });
    } catch (error) {
        response.json({message: "Failed to create user."});
    }
}

const updateUser = async(request, response) => {
    try {
        response.json({
            message: "User updated."
        });
    } catch (error) {
        response.json({message: "Failed to update user."});
    }
}

const deleteUser = async(request, response) => {
    try {
        response.json({
            message: "User deleted."
        });
    } catch (error) {
        response.json({message: "Failed to delete user."});
    }
}

const getUserById = async(request, response) => {
    try {
        response.json({
            message: "User detail returned."
        });
    } catch (error) {
        console.log(":::::::::", JSON.stringify(error));
        response.json({message: "Failed to return user details."});
    }
}

const getAllUsers = async(request, response) => {
    try {
        response.json({
            message: "Get all users."
        });
    } catch (error) {
        response.json({message: "Failed to get all user."});
    }
}

const authenticateUser = async(request, response) => {
    try {
        response.json({
            message: "User authenticated."
        });
    } catch (error) {
        response.json({message: "Failed to authenticate user."});
    }
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    getAllUsers,
    authenticateUser
};