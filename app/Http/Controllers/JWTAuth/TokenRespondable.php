<?php

declare(strict_types=1);

namespace App\Http\Controllers\JWTAuth;

use Illuminate\Http\JsonResponse;

trait TokenRespondable
{
    /**
     * @param $token
     * @return JsonResponse
     */
    protected function respondWithToken($token): JsonResponse
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 30
        ]);
    }
}
