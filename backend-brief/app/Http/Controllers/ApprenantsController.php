<?php

namespace App\Http\Controllers;

use App\Models\Apprenant;
use Illuminate\Http\Request;

class ApprenantsController extends Controller
{
    public function index()
    {
        $data = Apprenant::all();
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $apprenant = new Apprenant();
        $apprenant->nom = $request->nom;
        $apprenant->prenom = $request->prenom;
        $apprenant->email = $request->email;
        $apprenant->cin = $request->cin;
        $apprenant->naissance = $request->naissance;
        $apprenant->id_promotion = $request->id_promotion;
        $apprenant->save();

    }

    public function getapprenant($id)
    {
        $apprenant = Apprenant::find($id);
        return response()->json($apprenant);
    }

    public function update(Request $request, $id)
    {
        $update_apprenant = Apprenant::find($id);
        $update_apprenant->nom = $request->nom;
        $update_apprenant->prenom = $request->prenom;
        $update_apprenant->email = $request->email;
        $update_apprenant->cin = $request->cin;
        $update_apprenant->naissance = $request->naissance;
        $update_apprenant->save();
        return response()->json($update_apprenant);
    }

    public function destroy($id)
    {
        $delete_apprenant = Apprenant::destroy($id);
        return response()->json($delete_apprenant);
    }
}
