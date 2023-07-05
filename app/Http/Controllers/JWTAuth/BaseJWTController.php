<?php

declare(strict_types=1);

namespace App\Http\Controllers\JWTAuth;

use App\Http\Controllers\Controller;

abstract class BaseJWTController extends Controller
{
    use TokenRespondable;
}
