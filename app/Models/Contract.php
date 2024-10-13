<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function bonds(){
        return $this->hasMany(Bond::class);
    }

    public function client(){
        return $this->belongsTo(Client::class);
    }
}
