<?php

namespace App\Http\Controllers\JWTAuth;

use Illuminate\Http\JsonResponse;

final class RefreshController extends BaseJWTController
{
    /**
     * @return JsonResponse
     */
    public function __invoke(): JsonResponse
    {
        return $this->respondWithToken(auth()->refresh());
    }
}
