const express = require('express');
const router = express.Router();
const UserManagerController = require('../http/controller/AdminController/UserManagerController');
const adminController = require('../http/controller/AdminController/AdminController');
const userController = require('../http/controller/UserController/UserController');
const authMiddleware = require('../http/middleware/AuthMiddleware');
const fileExport = require('../http/controller/FileController/FileExport');
const { LoginRequest } = require('../http/request/LoginRequest');


const userRouter = express.Router();
const adminRouter = express.Router();
const download = express.Router();
const login = express.Router();

userRouter.use(authMiddleware.verifyToken)
adminRouter.get('/get-all-user', UserManagerController.getAllUsers)
adminRouter.get('/get-admin-info', adminController.getInfoAdmin)

userRouter.use(authMiddleware.verifyToken)
userRouter.head('/check-login', userController.checkLogin)
userRouter.get('/get-info', userController.getInfoUser)
userRouter.get('/get-time-sheets', userController.getTimeSheets)
userRouter.get('/search-timesheet/this-month', userController.searchTimeSheetThisMonth)
userRouter.get('/search-timesheet/last-month', userController.searchTimeSheetLastMonth)
userRouter.get('/search-timesheet/find-by-date', userController.searchTimeSheetByDate)

download.use(authMiddleware.verifyToken)
download.get('/cham-cong', userController.downloadAttendanceSummarySheet)


login.post('/admin/login', LoginRequest.validate, adminController.adminLogin)
login.post('/user/login', LoginRequest.validate, userController.userLogin)


const initApiRoute = (app) => {
    router.use('', login)
    router.use('/admin', adminRouter)
    router.use('/user', userRouter)
    router.use('/download', download)
    app.use('/api', router);
};



module.exports = {
    initApiRoute
}