<?php

namespace App\Http\Controllers\JWTAuth;

use Illuminate\Http\JsonResponse;

final class LogoutController extends BaseJWTController
{
    /**
     * @return JsonResponse
     */
    public function __invoke(): JsonResponse
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }
}
