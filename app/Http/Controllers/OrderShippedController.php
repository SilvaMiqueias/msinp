<?php

namespace App\Http\Controllers;

use App\Mail\OrderShipped;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class OrderShippedController extends Controller
{
    public function store(Request $request) {

        $imagePath = public_path('image\site\logo02megainsp.png');

        ///não esta passando na validação
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string', 'max:500']
        ]);

        $user = new \stdClass();
        $user->name = $request->name;
        $user->email = 'miqueiasdias23@gmail.com';
        $user->emailContato = $request->email;
        $user->phone = $request->phone;
        $user->description = $request->description;
        $user->image = $imagePath;
        Mail::to($user)->send(new OrderShipped($user));

        return redirect('/');
    }
}
