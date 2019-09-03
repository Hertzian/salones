<?php

use Illuminate\Database\Seeder;

class admin extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = new App\Admin;

        $admin->email = 'admin@admin.com';
        $admin->password = Hash::make('123456');
        $admin->save();

        $this->command->info('admin adicionado correctamente');
    }
}
