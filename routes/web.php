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

// Route::get('/', function () {
//     return view('layouts.app');
// });
 // Route::get('/', function () {
//     return view('prueba');
// });

Route::get('/', 'Auth\LoginController@showLoginForm');


Route::prefix('admin')->group(function() {
    Route::get('/', 'Auth\AdminLoginController@showLoginForm')->name('admin.login');
    Route::get('/login', 'Auth\AdminLoginController@showLoginForm')->name('admin.login');
    Route::post('/login', 'Auth\AdminLoginController@login')->name('admin.login.submit');
    Route::get('/dashboard', 'AdminController@index')
    // ->name('admin.dashboard')
    ;
    // Users
    Route::get('/getusers', 'AdminController@getUsersView');
    Route::get('/newuser', 'AdminController@newUserView');
    Route::post('/newuser', 'AdminController@newUser');
    Route::get('/updateuser/{id}', 'AdminController@updateUserView');
    Route::post('/updateuser/{id}', 'AdminController@updateUser');

    // Salones
    Route::get('/getsalones', 'AdminController@getSalones');
    Route::get('/detailsalon', 'AdminController@detailSalon');
    Route::get('/newsalon', 'AdminController@newSalonView');
    Route::post('/newsalon', 'AdminController@newSalon');
    Route::get('/updatesalon/{id}', 'AdminController@updateSalonView');
    Route::post('/updatesalon/{id}', 'AdminController@updateSalon');
    Route::get('/deletesalon/{id}' , 'AdminController@deleteSalon');

    //Paquetes
    Route::get('/getpaquetes', 'AdminController@getPaquetes');
    Route::get('/newpaquete', 'AdminController@newPaqueteView');
    Route::post('/newpaquete', 'AdminController@newPaquete');
    Route::get('/newpaquetes/{id}', 'AdminController@newPaqueteSView');
    Route::post('/newpaquetes/{id}', 'AdminController@newPaqueteS');
    Route::get('/updatepaquete/{id}', 'AdminController@updatePaqueteView');
    Route::post('/updatepaquete/{id}', 'AdminController@updatePaquete');
    Route::get('/deletepaquete/{id}' , 'AdminController@deletePaquete');

    // Calendar
    Route::get('/getcalendar', 'AdminController@getCalendar');
    Route::get('/updateevent/{id}', 'AdminController@updateEventView');
    Route::post('/updateevent/{id}', 'AdminController@updateEvent');
    Route::get('/newevent', 'AdminController@newEventView');
    Route::post('/newevent', 'AdminController@newEvent');
    Route::get('/deleteevent/{id}', 'AdminController@deleteEvent');
    // Pruebas
    // Gates control
    Route::get('/gate', 'AdminController@gateView');
    Route::post('/open', 'AdminController@open');
    Route::post('/close', 'AdminController@close');
    Route::post('/send', 'AdminController@send');
    
});

Route::prefix('user')->group(function(){

    Route::get('/vista', 'UsersController@vista');
    
    // Main view
    Route::get('/dashboard', 'DashboardController@index')->name('dashboard');

    // User details
    Route::get('/getuser', 'UsersController@getUser');
    Route::post('/getuser', 'UsersController@updateUser');

    // Select location
    Route::get('/getlocation', 'SalonesController@getLocation');
    
    // Salones list
    // Route::get('/getsalones', 'SalonesController@getSalones');

    // Select location
    Route::post('/getstate', 'SalonesController@getState');

    // Salon detail
    Route::get('/detailsalon/{id}', 'SalonesController@detailSalon');
    
    // Paquete detail
    Route::get('/getpaquete/{id}', 'PaquetesController@getPaquete');

    // Events
    Route::get('/getdate/{id}', 'EventsController@getDateView');
    Route::post('/getdate/{id}', 'EventsController@getDate');
    Route::get('/getcalendar', 'EventsController@getCalendarView');
    
});

Auth::routes();

