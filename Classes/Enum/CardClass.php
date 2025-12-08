<?php
declare(strict_types=1);

namespace GeorgRinger\FluidComponentsBackend\Enum;

enum CardClass: string
{
    case default = 'default';
    case info = 'info';
    case danger = 'danger';
    case success = 'success';
    case warning = 'warning';
    case notice = 'notice';
    case hidden = 'hidden';
}
