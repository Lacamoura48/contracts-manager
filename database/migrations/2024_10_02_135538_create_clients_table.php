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
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string("full_name");
            $table->string("phone");
            $table->string("phone2")->nullable();
            $table->string("id_code");
            $table->string("id_photo_front");
            $table->string("id_photo_back");
            $table->string("address")->nullable();
            $table->string("wife_name")->nullable();
            $table->string("wife_phone")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
