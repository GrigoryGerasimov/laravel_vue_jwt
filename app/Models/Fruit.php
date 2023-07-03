<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\{Model, SoftDeletes};

class Fruit extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'fruits';

    protected $guarded = false;
}
