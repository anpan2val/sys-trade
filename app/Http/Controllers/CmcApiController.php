<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use \App\Libs\NumberFormatter;

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
                    'price' => NumberFormatter::truncateNumber(51698.999513739),
                    'volume_24h' => NumberFormatter::truncateNumber(42135855135.304),
                    'volume_change_24h' => NumberFormatter::truncateNumber(3.4689),
                    'percent_change_1h' => NumberFormatter::truncateNumber(0.30816671),
                    'percent_change_24h' => NumberFormatter::truncateNumber(3.71978656),
                    'percent_change_7d' => NumberFormatter::truncateNumber(19.89281289),
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
                    ['price' => NumberFormatter::truncateNumber($res['data'][0]['quote']['USD']['price'])],
                ['volume_24h' => NumberFormatter::truncateNumber($res['data'][0]['quote']['USD']['volume_24h'])],
                ['volume_change_24h' => NumberFormatter::truncateNumber($res['data'][0]['quote']['USD']['volume_change_24h'])],
                ['percent_change_1h' => NumberFormatter::truncateNumber($res['data'][0]['quote']['USD']['percent_change_1h'])],
                ['percent_change_24h' => NumberFormatter::truncateNumber($res['data'][0]['quote']['USD']['percent_change_24h'])],
                ['percent_change_7d' => NumberFormatter::truncateNumber($res['data'][0]['quote']['USD']['percent_change_7d'])],
            ]
        );
    }
}
