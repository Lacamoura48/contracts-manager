<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Contract extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function bonds(){
        return $this->hasMany(Bond::class);
    }

    public function files(){
        return $this->hasMany(Sharedfile::class);
    }

    public function client(){
        return $this->belongsTo(Client::class);
    }

    public function generateUniqueUrl()
    {
        $this->uuid = Str::uuid(); // or use other unique generation logic
        $this->save();
    }
}
