<?php

declare(strict_types=1);

namespace GeorgRinger\FluidComponentsBackend\Components;

use Psr\Http\Message\ServerRequestInterface;
use TYPO3\CMS\Core\Page\AssetCollector;
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3Fluid\Fluid\Core\Component\AbstractComponentCollection;
use TYPO3Fluid\Fluid\View\TemplatePaths;

final class ComponentCollection extends AbstractComponentCollection
{
    public function __construct(private readonly AssetCollector $assetCollector) {}

    public function getTemplatePaths(): TemplatePaths
    {
        $templatePaths = new TemplatePaths();
        $templatePaths->setTemplateRootPaths([
            ExtensionManagementUtility::extPath('fluid_components_backend', 'Resources/Private/Components'),
        ]);
        return $templatePaths;
    }

    public function getAdditionalVariables(string $viewHelperName): array
    {
        if (!empty($this->getRequest()->getHeader('x-storybook-typo3-key'))) {
            $fileName = GeneralUtility::getFileAbsFileName('EXT:backend/Resources/Public/Css/backend.css');
            $this->assetCollector->addInlineStyleSheet('backend', (string)file_get_contents($fileName));
        }
        return [];
    }

    private function getRequest(): ServerRequestInterface
    {
        return $GLOBALS['TYPO3_REQUEST'];
    }
}
