<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_produk',
        'kategori_id',
        'deskripsi',
        'harga',
        'stok',
        'gambar',
        'kode',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'kategori_id');
    }
}
