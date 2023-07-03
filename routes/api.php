<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['namespace' => 'App\Http\Controllers\Fruits', 'prefix' => 'fruits'], function() {
    Route::get('/', 'IndexController')->name('api.fruits.index');
});

Route::group(['namespace' => 'App\Http\Controllers\User', 'prefix' => 'user'], function() {
    Route::group(['namespace' => 'Auth', 'prefix' => 'auth'], function() {
        Route::post('/signin', 'SigninController')->name('api.auth.signin');
        Route::post('/signup', 'SignupController')->name('api.auth.signup');
    });
});
