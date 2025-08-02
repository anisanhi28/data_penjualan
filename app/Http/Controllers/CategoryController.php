<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        return Inertia::render('Categories/index', [
            'categories' => Category::all(),
            'auth' => ['user' => auth()->user()],
        ]);
    }

    public function create()
    {
        return Inertia::render('Categories/create', [
            'auth' => ['user' => auth()->user()],
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
        ]);

        Category::create([
            'nama' => $request->nama,
        ]);

        return redirect()->route('categories.index')->with('success', 'Kategori berhasil ditambahkan.');
    }

    public function edit($id)
    {
        $category = Category::findOrFail($id);
        return Inertia::render('Categories/edit', [
            'category' => $category,
            'auth' => ['user' => auth()->user()],
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
        ]);

        $category = Category::findOrFail($id);
        $category->update([
            'nama' => $request->nama,
        ]);

        return redirect()->route('categories.index')->with('success', 'Kategori berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return redirect()->route('categories.index')->with('success', 'Kategori berhasil dihapus.');
    }

    public function show($id)
    {
        $category = Category::findOrFail($id);
        return Inertia::render('Categories/show', [
            'category' => $category,
            'auth' => ['user' => auth()->user()],
        ]);
    }
}
