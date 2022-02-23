<?php

declare(strict_types=1);

namespace App\Traits;

use InvalidArgumentException;
use Symfony\Component\PropertyAccess\PropertyAccess;

trait ArrayTrait
{
    /**
     * Retrieve the value of a field from a collection of objects :
     *
     * Input :
     *
     *  $languages =
     *  [
     *     0   => language {
     *              - id => 12451,
     *              - code => 'en',
     *              - name => 'Anglais',
     *           }
     *     //....
     *  ]
     *
     *  $languages = $this->columnize($languages, 'code');
     *
     * Output:
     *
     *  $languages  = ['0' => 'en'
     *                   //...
     *                ]
     *
     * @return array|\Countable
     */
    public function columnize(array $items, string $key = null, bool $forceIntValue = false)
    {
        if (!is_countable($items)) {
            throw new \Exception('The "' . __METHOD__ . '" method does not apply to a variable whose type is not countable');
        }

        if (!\count($items)) {
            return $items;
        }

        $firstValue = $this->firstValue($items);

        // array = [['id' => ...], ['id' => ...], ...]
        if (null === $key && \is_array($firstValue)) {
            $key = array_key_first($firstValue);
        }

        if (null === $key) {
            throw new InvalidArgumentException('Aucune clé ' . $key . ' spécifiée.');
        }
        $key = (string) $key;

        if (\is_array($firstValue) && false === strpos($key, '[')) {
            $key = '[' . $key . ']';
        }

        $accessor = PropertyAccess::createPropertyAccessor();

        $column = [];
        foreach ($items as $element) {
            try {
                $value = $accessor->getValue($element, $key);
            } catch (\Exception $e) {
                $value = 'undefined';
            }
            $column[] = $forceIntValue ? (int) $value : $value;
        }

        return $column;
    }

    /**
     * @return mixed|null
     */
    public function firstValue(array $items)
    {
        if (!$items) {
            return null;
        }

        return $items[array_key_first($items)];
    }

    /*
    * Input :
    *
    *  $languages =
    *  [
    *     0   => language {
    *              - id => 12451,
    *              - code => 'en',
    *              - name => 'Anglais',
    *           }
    *     //....
    *  ]
    *
    *  $languages = $this->createAssociativeArray($languages, 'code', 'name');
    *
    * Output:
    *
    *  $languages  = ['en' => 'Anglais'
    *                      //...
    *                ]
    *
    */
    public function createAssociativeArray(array $items, string $key, ?string $value = null, bool $multiple = false): array
    {
        if (!\is_array($items)) {
            throw new \Exception('The "' . __METHOD__ . '" method does not apply to a variable whose type is not in array');
        }
        if (!$items) {
            return [];
        }

        $accessor = PropertyAccess::createPropertyAccessor();

        $associative = [];
        foreach ($items as $item) {
            try {
                $itemKey = $accessor->getValue($item, $key);
            } catch (\Exception $e) {
                continue;
            }
            if ($value) {
                $itemValue = $accessor->getValue($item, $value);
            } else {
                $itemValue = $item;
            }

            if ($multiple && !isset($associative[$itemKey])) {
                $associative[$itemKey] = [];
            }

            if ($multiple) {
                $associative[$itemKey][] = $itemValue;
            } else {
                $associative[$itemKey] = $itemValue;
            }
        }

        return $associative;
    }

    public function groupBy(array $items, string $key, bool $unique = false): array
    {
        if (!is_countable($items)) {
            throw new \Exception('The "' . __METHOD__ . '" method does not apply to a variable whose type is not countable');
        }

        if (!$items) {
            return $items;
        }

        $accessor = PropertyAccess::createPropertyAccessor();

        $groupedItems = [];
        foreach ($items as $element) {
            try {
                $value = $accessor->getValue($element, $key);
            } catch (\Exception $e) {
                $value = 'undefined';
            }

            if ($unique) {
                $groupedItems[$value] = $element;
            } else {
                $groupedItems[$value][] = $element;
            }
        }

        return $groupedItems;
    }
}
