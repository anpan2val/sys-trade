<?php

namespace App\Libs;

class NumberFormatter
{

    /**
     * @param $number
     * @param $precision
     * @return float|int
     */
    public static function truncateNumber($number, $precision = 2)
    {
        return floor($number * pow(10, $precision)) / pow(10, $precision);
    }
}
