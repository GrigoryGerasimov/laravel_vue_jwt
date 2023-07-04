<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\SignUpRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class SignUpController extends Controller
{
    public function __invoke(SignUpRequest $request): UserResource
    {
        $userData = $request->validated();

        $userData['password'] = Hash::make($userData['password']);

        $user = User::create($userData);

        return new UserResource($user);
    }
}
