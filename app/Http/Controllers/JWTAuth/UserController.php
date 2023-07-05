<?php

namespace App\Http\Controllers\JWTAuth;

use Illuminate\Http\JsonResponse;

final class UserController extends BaseJWTController
{
    /**
     * @return JsonResponse
     */
    public function __invoke(): JsonResponse
    {
        return response()->json(auth()->user());
    }
}
