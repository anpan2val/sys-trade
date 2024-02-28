<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CmcApiController;
use App\Http\Controllers\CmcApiQuotesHistoricalBtcController;
use App\Http\Controllers\CmcApiQuotesHistoricalLuncController;
use App\Http\Controllers\CmcApiQuotesHistoricalUstcController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/cmc', [CmcApiController::class, 'index']);
Route::get('/cmc_btc', [CmcApiQuotesHistoricalBtcController::class, 'index']);
Route::get('/cmc_lunc', [CmcApiQuotesHistoricalLuncController::class, 'index']);
Route::get('/cmc_ustc', [CmcApiQuotesHistoricalUstcController::class, 'index']);
