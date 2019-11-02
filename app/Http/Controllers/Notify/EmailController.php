<?php

namespace App\Http\Controllers\Notify;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Auth;
use App\Mail\UserEmail;
use Illuminate\Support\Facades\Mail;
class EmailController extends Controller
{
    public function sendEmailReminder(Request $request)
    {
        try
        {
            $id = 6; // điền 1 mã id bất kỳ của user trong bảng users
            $user = User::findOrFail($id);

            Mail::to($user)->send(new UserEmail());
            return response()->json([
                'status' => true,
                'message' => 'success'
            ]);
        }
        catch(\Exception $e)
        {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage()
            ]);
        }
    }
}
