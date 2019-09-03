<?php

use Illuminate\Database\Seeder;

class paquete extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('paquetes')->insert([
            'name' => 'Primero',
            'price' => '1235.00',
            'descriptionC' => 'Un paquete exelente',
            'description' => 'El paquete incluye: -sillas, mesero, mesas, asador...',
            'id_salon' => '1',            
        ]);

        DB::table('paquetes')->insert([
            'name' => 'Segundo',
            'price' => '1235.00',
            'descriptionC' => 'Un paquete exelente',
            'description' => 'El paquete incluye: -sillas, mesero, mesas, asador...',
            'id_salon' => '1',            
        ]);

        DB::table('paquetes')->insert([
            'name' => 'Tercero',
            'price' => '1235.00',
            'descriptionC' => 'Un paquete exelente',
            'description' => 'El paquete incluye: -sillas, mesero, mesas, asador...',
            'id_salon' => '2',            
        ]);

        DB::table('paquetes')->insert([
            'name' => 'Cuarto',
            'price' => '1235.00',
            'descriptionC' => 'Un paquete exelente',
            'description' => 'El paquete incluye: -sillas, mesero, mesas, asador...',
            'id_salon' => '2',            
        ]);

        DB::table('paquetes')->insert([
            'name' => 'Quinto',
            'price' => '1235.00',
            'descriptionC' => 'Un paquete exelente',
            'description' => 'El paquete incluye: -sillas, mesero, mesas, asador...',
            'id_salon' => '3',            
        ]);

        DB::table('paquetes')->insert([
            'name' => 'Sexto',
            'price' => '1235.00',
            'descriptionC' => 'Un paquete exelente',
            'description' => 'El paquete incluye: -sillas, mesero, mesas, asador...',
            'id_salon' => '3',            
        ]);

        $this->command->info('paquetes adicionados correctamente');
    }
}
