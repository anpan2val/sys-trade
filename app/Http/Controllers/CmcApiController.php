<?php
namespace App\Http\Controllers;

class CmcApiController extends Controller
{
    public function index()
    {
        return response()->json(
            [
                'test' => 'item'
            ]
        );
    }
}
