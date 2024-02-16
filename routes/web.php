<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\OrderShippedController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
    return Inertia::render('Site/Home');
});

Route::get('/servico', function () {
    return Inertia::render('Site/Home');
});

Route::get('/contato', function () {
    return Inertia::render('Site/Home');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/mail', [OrderShippedController::class, 'store'])->name('mail.store');
Route::get('envio-email', function (){
    $user = new \stdClass();
    $user->name = "testinho";
    $user->email = 'central@tmpd.com.br';
    $user->emailContato = "email contato";
    $user->phone = "8989898989989";
    $user->description = "tesxtete";
    $user->image = '';
    return new \App\Mail\OrderShipped($user);
});

require __DIR__.'/auth.php';
