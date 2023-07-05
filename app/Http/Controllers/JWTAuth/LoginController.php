<?php

namespace App\Http\Controllers\JWTAuth;

use Illuminate\Http\JsonResponse;

final class LoginController extends BaseJWTController
{
    /**
     * @return JsonResponse
     */
    public function __invoke(): JsonResponse
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }
}
