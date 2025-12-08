<?php

use Andersundsehr\Storybook\Transformer\ArgumentTransformers;
use GeorgRinger\FluidComponentsBackend\Enum\CardClass;

return new ArgumentTransformers(
    class: function (CardClass $class): string {
        return $class->value;
    },
);
