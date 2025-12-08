<?php

use Andersundsehr\Storybook\Transformer\ArgumentTransformers;
use GeorgRinger\FluidComponentsBackend\Enum\InfoboxState;

return new ArgumentTransformers(
    state: function (InfoboxState $state): int {
        return $state->value;
    },

);
