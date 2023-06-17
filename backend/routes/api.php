<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// API Version : v1
Route::prefix('v1')->group(
    function () {

        // Api to create user
        Route::get("/user/create", [UserController::class, "createUser"]);

        // Api to view profile
        Route::get("/user/profile/view", [UserController::class, "viewUserProfile"]);

        // Api to update user profile
        Route::get("/user/profile/update", [UserController::class, "updateUserProfile"]);

        // Api to list all user
        Route::get("/user/list", [UserController::class, "listAllUser"]);
    }
);
