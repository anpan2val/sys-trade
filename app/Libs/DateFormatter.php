<?php

namespace App\Libs;

class DateFormatter
{

    public static function formatDateTimeToHourMinute($date)
    {
        // DateTimeオブジェクトを作成し、UTCとしてパース
        $dateTime = new \DateTime($date, new \DateTimeZone('UTC'));

        // 必要なタイムゾーンに変更する場合はここで設定
        $dateTime->setTimezone(new \DateTimeZone('Asia/Tokyo'));

        // '時:分' の形式でフォーマット
        return $dateTime->format('H:i');
    }


}
