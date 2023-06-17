<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
            $table->string('user_id')->unique();
            $table->string('image')->default("");
            $table->date('dob')->nullable();
            $table->string('age')->default();
            $table->string('gender')->default();
            $table->string('address')->default();
            $table->string('city')->default();
            $table->string('district')->default();
            $table->string('pincode')->default();
            $table->string('state')->default();
            $table->string('country')->default();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_profiles');
    }
};
