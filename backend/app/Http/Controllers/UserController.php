<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function createUser(Request $request)
    {
        // Validating Parameters
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required',
            'mobile' => 'required',
            'image' => 'required',
            'dob' => 'required',
            'password' => 'required'
        ]);

        // If Any Validation Fails then Custom Message
        if ($validator->fails()) {
            return response()->json([
                'status' => 'failure',
                'status_code' => 400,
                'message' => $validator->errors()
            ]);
        }

        $user = User::where('email', $request->email)->first();
        if ($user) {
            return response()->json([
                'status' => 'failure',
                'status_code' => 400,
                'message' => 'Email already exists'
            ]);
        }

        $user = User::where('mobile', $request->mobile)->first();
        if ($user) {
            return response()->json([
                'status' => 'failure',
                'status_code' => 400,
                'message' => 'Mobile already exists'
            ]);
        }

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->mobile = $request->mobile;
        $user->password = Hash::make($request->password);
        $user->save();

        $user_profile = new UserProfile();
        $user_profile->user_id = $user->id;
        if ($request->has('dob')) {
            $user_profile->dob = $request->dob;
        }
        if ($request->has('age')) {
            $user_profile->age = $request->age;
        }
        if ($request->has('gender')) {
            $user_profile->gender = $request->gender;
        }
        if ($request->has('address')) {
            $user_profile->address = $request->address;
        }
        if ($request->has('city')) {
            $user_profile->city = $request->city;
        }
        if ($request->has('district')) {
            $user_profile->district = $request->district;
        }
        if ($request->has('pincode')) {
            $user_profile->pincode = $request->pincode;
        }
        if ($request->has('state')) {
            $user_profile->state = $request->state;
        }
        if ($request->has('country')) {
            $user_profile->country = $request->country;
        }
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = time() . "-" . $file->hashName();
            $file->move('user-profile/', $filename);
            $user_profile->image_path = "user-profile/" . $filename;
        }
        $user_profile->save();
        return response()->json([
            "status" => "success",
            "status_code" => 200,
            "message" => "User created successfully",
            "date" => array(
                "user_id" => $user->id
            )
        ]);
    }
    public function viewUserProfile(Request $request)
    {
        // Params : email , mobile , id
        $params = "";
        if ($request->has('id')) {
            $params = "id";
        }
        if ($request->has('email')) {
            $params = "email";
        }
        if ($request->has('mobile')) {
            $params = "mobile";
        }

        $user = User::where($params, $request->input($params))->first();
        if ($user) {
            $user["user_profile"] = UserProfile::where("user_id", $user->id)->first();
            return response()->json([
                "status" => "success",
                "status_code" => 200,
                "data" => $user
            ]);
        } else {
            return response()->json([
                "status" => "failure",
                "status_code" => 400,
                "message" => "User doesn't found"
            ]);
        }
    }
    public function updateUserProfile(Request $request)
    {
    }
    public function listAllUser(Request $request)
    {
        $user = User::get();
        return response()->json([
            "status" => "success",
            "status_code" => 200,
            "data" => $user
        ]);
    }
}
