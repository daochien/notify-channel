<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::post('signIn', 'AuthenController@signIn')->name('signIn');

Route::group(['middleware' => ['auth.admin']], function () {
    Route::get('login', 'AuthenController@login')->name('login');
    Route::get('register', 'AuthenController@register')->name('register');

    Route::get('google/auth/login', 'AuthenController@redirectToProvider')->name('google.login');
    Route::get('google/auth/callback', 'AuthenController@handleProviderCallback')->name('google.callback');

    Route::get('logout', 'AuthenController@logout')->name('logout');

    Route::group(['prefix' => 'admin', 'as' => 'admin.'], function() {
        Route::get('/', 'Admin\AppController@app')->name('app');
        Route::get('/{any}', 'Admin\AppController@app')->where('any', '.*');
    });
});

Route::get('/send_email', array('uses' => 'Notify\EmailController@sendEmailReminder'));
