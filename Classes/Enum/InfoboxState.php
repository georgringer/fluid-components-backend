<?php
declare(strict_types=1);

namespace GeorgRinger\FluidComponentsBackend\Enum;

enum InfoboxState: int
{
    case notice = -2;
    case info = -1;
    case ok = 0;
    case warning = 1;
    case error = 2;
}
