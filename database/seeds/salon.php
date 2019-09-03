<?php

use Illuminate\Database\Seeder;

class salon extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $salon = new App\Salon;
        // $salon->name = 'Papos';
        // $salon->color = '#ff8080';
        // $salon->descriptionC = 'Un salón con una vista increíble';
        // $salon->description = 'Un salón con una vista increíble, y una arquitectura fantástica';
        // $salon->state = 'Aguascalientes';
        // $salon->lng = '-103.38676459311523';
        // $salon->lat = '20.722110457322955';

        DB::table('salones')->insert([
            'name' => 'Papos',
            'color' => '#ff8080',
            'descriptionC' => 'Un salón con una vista increíble',
            'description' => 'Un salón con una vista increíble, y una arquitectura fantástica',
            'state' => 'Aguascalientes',
            'lng' => '-103.38676459311523',
            'lat' => '20.722110457322955',
        ]);

        DB::table('salones')->insert([
            'name' => 'Class',
            'color' => '#' . str_random(6),
            'descriptionC' => 'Un salón con una vista increíble',
            'description' => 'Un salón con una vista increíble, y una arquitectura fantástica',
            'state' => 'Aguascalientes',
            'lng' => '-103.38968283652343',
            'lat' => '20.728532568457105',
        ]);

        DB::table('salones')->insert([
            'name' => 'Terralia',
            'color' => '#' . str_random(6),
            'descriptionC' => 'Un salón con una vista increíble',
            'description' => 'Un salón con una vista increíble, y una arquitectura fantástica',
            'state' => 'Aguascalientes',
            'lng' => '-103.38607794760742',
            'lat' => '20.722110457322955',
        ]);

        $this->command->info('salones adicionados correctamente');
    }
}
