<?php

use Illuminate\Database\Seeder;

class user extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {        
        DB::table('users')->insert([
            'name' => 'Margarita',
            'apellidoP' => 'Gómez',
            'apellidoM' => 'Velázquez',
            'domicilio' => 'Pitagoras 1253 int. 4',
            'colonia' => 'Morelos',
            'municipio' => 'Zapopan',
            'codigoP' => '12345',
            'telefono' => '1234567890',
            'imgId' => 'imgid',
            'imgOfId' => 'imgofid',
            'curp' => 'curp',
            'compD' => 'compD',
            'email' => 'user@user.com',
            'password' => Hash::make('123456')
        ]);

        DB::table('users')->insert([
            'name' => 'Rodolfo',
            'apellidoP' => 'Elrreno',
            'apellidoM' => 'Feliz',
            'domicilio' => 'Pitagoras 1154 int. 2',
            'colonia' => 'Morelos',
            'municipio' => 'Zapopan',
            'codigoP' => '12345',
            'telefono' => '1234567890',
            'imgId' => 'imgid',
            'imgOfId' => 'imgofid',
            'curp' => 'curp',
            'compD' => 'compD',
            'email' => 'user2@user2.com',
            'password' => Hash::make('123456')
        ]);

        $this->command->info('user adicionado correctamente');
    }
}
