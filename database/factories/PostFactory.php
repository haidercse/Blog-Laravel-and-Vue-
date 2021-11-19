<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => rand(1,10),
            'category_id' => rand(1,5),
            'title' => $this->faker->sentence(),
            'content' => $this->faker->paragraph(),
            'thumbnail' => $this->faker->imageUrl(),
            'status' => $this->getRandomStatus(),
        ];
    }

    public function getRandomStatus(){
        #generate random status
        $status = array('draft','publish');
        return $status[array_rand($status)];
    }

}
