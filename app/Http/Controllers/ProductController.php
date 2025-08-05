<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Products/index', [
            'products' => Product::with('category')->get(),
            'auth' => ['user' => auth()->user()],
            'success' => session('success', null),
            'error' => session('error', null),
        ]);
    }
    public function create()
    {
        return Inertia::render('Products/create', [
            'categories' => Category::all(),
            'auth' => ['user' => auth()->user()],
        ]);
    }

    // Simpan produk baru ke database
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_produk' => 'required|string|max:255',
            'kategori_id' => 'required|exists:categories,id',
            'deskripsi' => 'nullable|string',
            'harga' => 'required|integer|min:0',
            'stok' => 'required|integer|min:0',
            'gambar' => 'nullable|image|max:2048',
            'kode' => 'required|string|max:100|unique:products,kode',
        ]);

        if ($request->hasFile('gambar')) {
            $validated['gambar'] = $request->file('gambar')->store('produk', 'public');
        }

        Product::create($validated);

        return redirect()->route('products.index')->with('success', 'Produk berhasil ditambahkan.');
    }

    // Tampilkan detail satu produk
    public function show(Product $product)
    {
        return Inertia::render('Products/show', [
            'product' => $product->load('category'),
            'auth' => ['user' => auth()->user()],
        ]);
    }

    // Tampilkan form untuk edit produk
    public function edit($id)
    {
        $product = Product::findOrFail($id);
        return Inertia::render('Products/edit', [
            'product' => $product,
            'categories' => Category::all(),
            'auth' => ['user' => auth()->user()],
        ]);
    }

    // Update data produk
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        $validated = $request->validate([
            'nama_produk' => 'required|string|max:255',
            'kategori_id' => 'required|exists:categories,id',
            'deskripsi' => 'nullable|string',
            'harga' => 'required|integer|min:0',
            'stok' => 'required|integer|min:0',
            'gambar' => 'nullable|image|max:2048',
            'kode' => 'required|string|max:100|unique:products,kode,' . $product->id,
        ]);

        if ($request->hasFile('gambar')) {
            $validated['gambar'] = $request->file('gambar')->store('produk', 'public');
        }

        $product->update($validated);

        return redirect()->route('products.index',[],303)->with('success', 'Produk berhasil diperbarui.');
    }

    // Hapus produk
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return redirect()->route('products.index',[],303)->with('success', 'Produk berhasil dihapus.');
    }
}
