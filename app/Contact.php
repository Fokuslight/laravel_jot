<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Contact extends Model
{

    use Searchable;

    protected $guarded = [];

    protected $dates = ['birthday'];

    public function setBirthDayAttribute($birthday)
    {
        $this->attributes['birthday'] = Carbon::parse($birthday);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function scopeBirthdays($query)
    {
        return $query->whereMonth('birthday', now()->format('m'));
    }


    public function path()
    {
        return '/contacts/' . $this->id;
//        return url('/contacts/' . $this->id);
    }
}
