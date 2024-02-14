<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class CmcApiController extends Controller
{
    public function index()
    {
        $res = Http::withHeaders([
            'X-CMC_PRO_API_KEY' => config('config_cmc.cmc_apikey'),
        ])->get(config('config_cmc.cmc_currency_latest_uri'))->json();

        return response()->json(
            [
                'data' =>
                ['price' => $res['data'][0]['quote']['USD']['price']],
                ['volume_24h' => $res['data'][0]['quote']['USD']['volume_24h']],
                ['volume_change_24h' => $res['data'][0]['quote']['USD']['volume_change_24h']],
                ['percent_change_1h' => $res['data'][0]['quote']['USD']['percent_change_1h']],
                ['percent_change_24h' => $res['data'][0]['quote']['USD']['percent_change_24h']],
                ['percent_change_7d' => $res['data'][0]['quote']['USD']['percent_change_7d']],
            ]
        );
    }
}
