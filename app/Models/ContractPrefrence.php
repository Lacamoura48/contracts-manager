<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContractPrefrence extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function contract() {
        return $this->belongsTo(Contract::class);
    }
}
