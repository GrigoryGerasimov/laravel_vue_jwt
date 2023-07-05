<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->group(function() {
    Route::group(['namespace' => 'App\Http\Controllers\JWTAuth', 'prefix' => 'auth'], function() {
        Route::post('/login', 'LoginController')->name('api.auth.login')->withoutMiddleware('auth:api');
        Route::post('/logout', 'LogoutController')->name('api.auth.logout');
        Route::post('/refresh', 'RefreshController')->name('api.auth.refresh')->withoutMiddleware('auth:api');
        Route::post('/user', 'UserController')->name('api.auth.user');
    });

    Route::group(['namespace' => 'App\Http\Controllers\Fruits', 'prefix' => 'fruits'], function() {
        Route::get('/', 'IndexController')->name('api.fruits.index');
    });
});



Route::group(['namespace' => 'App\Http\Controllers\User', 'prefix' => 'user'], function() {
    Route::group(['namespace' => 'Auth', 'prefix' => 'auth'], function() {
        Route::post('/signin', 'SignInController')->name('api.auth.signin');
        Route::post('/signup', 'SignUpController')->name('api.auth.signup');
    });
});
