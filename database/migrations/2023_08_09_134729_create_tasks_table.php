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
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('team_id')->nullable();
            $table->unsignedBigInteger('job_desc_id')->nullable();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->unsignedBigInteger('assigned_by')->nullable();
            $table->unsignedBigInteger('assigned_to')->nullable();
            $table->timestamp('response_time')->nullable();
            $table->date('assignment_date')->nullable();
            $table->date('due_date')->nullable();
            $table->time('due_clock')->nullable();
            $table->boolean('is_primary')->default('0');
            $table->boolean('complete')->default('0');
            $table->string('title', 1000);
            $table->string('description', 1000)->nullable();
            $table->string('task_status')->default('To-Do');
            $table->string('task_source')->nullable();
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
