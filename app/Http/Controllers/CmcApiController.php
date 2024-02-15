<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class CmcApiController extends Controller
{
    public function dummy()
    {
        // dummy data for debug
        return array(
            'data' => [
                'price' => '51698.999513739',
                'volume_24h' => '42135855135.304',
                'volume_change_24h' => '3.4689',
                'percent_change_1h' => '0.30816671',
                'percent_change_24h' => '3.71978656',
                'percent_change_7d' => '19.89281289',
            ],
        );
    }

    public function index()
    {
        $res = Http::withHeaders([
            'X-CMC_PRO_API_KEY' => config('config_cmc.cmc_apikey'),
        ])->get(config('config_cmc.cmc_currency_latest_uri'))->json();

        return response()->json(
            [
                'data' =>
                    ['price' => $res['data'][0]['quote']['USD']['price']], // 51698.999513739
                ['volume_24h' => $res['data'][0]['quote']['USD']['volume_24h']], // 42135855135.304
                ['volume_change_24h' => $res['data'][0]['quote']['USD']['volume_change_24h']], // 3.4689
                ['percent_change_1h' => $res['data'][0]['quote']['USD']['percent_change_1h']], // 0.30816671
                ['percent_change_24h' => $res['data'][0]['quote']['USD']['percent_change_24h']], // 3.71978656
                ['percent_change_7d' => $res['data'][0]['quote']['USD']['percent_change_7d']], // 19.89281289
            ]
        );
    }
}
