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
        Schema::create('apprenants_tasks', function (Blueprint $table) {
            $table->integer("etatTask");
            $table->unsignedBigInteger('task_id');
            $table->unsignedBigInteger('apprenant_id');
            $table->foreign('task_id')->references('id')->on('tasks')->onDelete('cascade');
            $table->foreign('apprenant_id')->references('id')->on('apprenant')->onDelete('cascade');
            $table->primary(['task_id', 'apprenant_id']);
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
        Schema::dropIfExists('apprenants_tasks');
    }
};
