<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\SignInRequest;
use App\Http\Resources\UserResource;
use App\Models\User;

class SignInController extends Controller
{
    public function __invoke(SignInRequest $request): ?UserResource
    {
        $loginData = $request->validated();

        $user = User::where(['email' => $loginData['email']])->first();

        return password_verify($loginData['password'], $user->password) ? new UserResource($user) : null;
    }
}
