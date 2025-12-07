<?php

use Andersundsehr\Storybook\Transformer\ArgumentTransformers;
use TYPO3\CMS\Core\Utility\GeneralUtility;

return new ArgumentTransformers(
    //    slot____header: function (string $header = 'My Header:This is my content|'): array {
    //        $split = \TYPO3\CMS\Core\Utility\GeneralUtility::trimExplode('|', $header, true);
    //        $items = [];
    //        foreach ($split as $key => $value) {
    //            $line = GeneralUtility::trimExplode(':', $value, true);
    //            $items[] = [
    //                'id' => $line[0],
    //                'content' => $line[1] ?? '',
    //            ];
    //        }
    //        return $items;
    //    },
);
