<?php

namespace App\Http\Controllers\Fruits;

use App\Http\Controllers\Controller;
use App\Http\Resources\FruitsResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class IndexController extends Controller
{
    public function __invoke(): AnonymousResourceCollection
    {
        return FruitsResource::collection();
    }
}
