import catchAsync from '../utils/catchAsync.js';
// register user controller
export const registerUser = catchAsync(async (req, res) => {
    const userData = req.body;
    console.log('Received user data:', userData);
    res.send(userData);
});
