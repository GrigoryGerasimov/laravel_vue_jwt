<?php

namespace App\Http\Controllers\Fruits;

use App\Http\Controllers\Controller;
use App\Http\Resources\FruitsResource;
use App\Models\Fruit;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class IndexController extends Controller
{
    public function __invoke(): AnonymousResourceCollection
    {
        $fruitsList = Fruit::all();

        return FruitsResource::collection($fruitsList);
    }
}
