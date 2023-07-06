<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\SignUpRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\{DB, Hash, Log};

class SignUpController extends Controller
{
    public function __invoke(SignUpRequest $request): UserResource|JsonResponse
    {
        try {
            DB::beginTransaction();

            $userData = $request->validated();

            if (User::where(['email' => $userData['email']])->first()) {
                return response()->json(['error' => 'User with this email already exists']);
            }

            $userData['password'] = Hash::make($userData['password']);

            $user = User::create($userData);

            DB::commit();

            return new UserResource($user);
        } catch (\Exception $e) {
            DB::rollBack();

            Log::error($e->getMessage(), $e->getTrace());
            throw $e;
        }
    }
}
