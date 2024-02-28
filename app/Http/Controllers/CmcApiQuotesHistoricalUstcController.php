<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use \App\Libs\DateFormatter;

/**
 * Class CmcApiQuotesHistoricalBtcController
 * @package App\Http\Controllers
 * @group CmcApiQuotesHistoricalBtcController
 * @authenticated
 * @version 1.0.0
 * APIDoc https://coinmarketcap.com/api/documentation/v1/#operation/getV3CryptocurrencyQuotesHistorical
 */
class CmcApiQuotesHistoricalUstcController extends Controller
{

    public function index()
    {
        $res = Http::withHeaders([
            'X-CMC_PRO_API_KEY' => config('config_cmc.cmc_apikey'),
        ])->get(config('config_cmc.cmc_quotes_historical_uri'),
            [
                'id' => '7129',
                'count' => '30',
                'interval' => '15m',
            ]
        )->json();

        $historicalQuotes = array();
        foreach ($res['data']['7129']['quotes'] as $quote) {
            $historicalQuotes[] = array(
                'timestamp' => DateFormatter::formatDateTimeToHourMinute($quote['timestamp']), // '2024-02-25T13:55:00.000Z' -> '13:55'
                'data' => [
                    'percent_change_1h' => $quote['quote']['USD']['percent_change_1h'], // 0.015994713325,
                    'percent_change_24h' => $quote['quote']['USD']['percent_change_24h'], // 0.989630363924,
                    'percent_change_7d' => $quote['quote']['USD']['percent_change_7d'], //  -0.097448310534,
                    'percent_change_30d' => $quote['quote']['USD']['percent_change_30d'], // 26.030203718795,
                    'price' => $quote['quote']['USD']['price'], // 51637.98707868543,
                ],
                'quote' => $quote['quote'],
            );
        }

        return $historicalQuotes;

    }
}
