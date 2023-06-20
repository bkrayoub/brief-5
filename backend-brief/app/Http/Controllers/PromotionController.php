<?php

namespace App\Http\Controllers;

use App\Models\Promotion;
use Illuminate\Http\Request;

class PromotionController extends Controller
{

    public function index()
    {
        $data = Promotion::all();
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $promotion = new Promotion();
        $promotion->name = $request->name;
        $promotion->save();

    }

    public function getPromotion($id)
    {
        $promotion = Promotion::find($id);
        return response()->json($promotion);
    }

    public function update(Request $request, $id)
    {
        $update_promotion = Promotion::find($id);
        $update_promotion->name = $request->name;
        $update_promotion->save();
        return response()->json($update_promotion);
    }

    public function destroy($id)
    {
        $delete_promotion = Promotion::destroy($id);
        return response()->json($delete_promotion);
    }
}
