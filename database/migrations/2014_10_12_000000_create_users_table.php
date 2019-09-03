<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('apellidoP');
            $table->string('apellidoM');
            $table->string('domicilio');
            $table->string('colonia');
            $table->string('municipio');
            $table->string('codigoP');
            $table->string('telefono');
            $table->string('imgId')->default('imgId');
            $table->string('imgOfId')->default('imgOfId');
            $table->string('curp')->default('curp');
            $table->string('compD')->default('compD');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
