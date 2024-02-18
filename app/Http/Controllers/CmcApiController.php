<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class CmcApiController extends Controller
{
    public function dummy()
    {
        $key = 'cmc_data_' . date('YmdHi');

        $value = Cache::get($key);

        if (!$value) {

            \Log::info('Cache not exist');
            $value = array(
                'data' => [
                    'price' => floor(51698.999513739),
                    'volume_24h' => floor(42135855135.304),
                    'volume_change_24h' => floor(3.4689 * 10) / 10,
                    'percent_change_1h' => floor(0.30816671 * 10) / 10,
                    'percent_change_24h' => floor(3.71978656 * 10) / 10,
                    'percent_change_7d' => floor(19.89281289 * 10) / 10,
                ],
            );

            $value = json_encode($value, true);

            Cache::set($key, $value, 60);
        } else {

            \Log::info('Cache exist');
        }

        return $value;

    }

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
