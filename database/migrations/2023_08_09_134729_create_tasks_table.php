<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('job_desc_id')->nullable();
            $table->unsignedBigInteger('team_id')->nullable();
            $table->string('title', 1000);
            $table->string('description', 1000)->nullable();
            $table->string('task_status')->default("To-Do");
            $table->string('task_source')->nullable();
            $table->boolean('is_primary')->default('0');
            $table->boolean('compleated')->default('0');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
};
