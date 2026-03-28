<?php

use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../easy/two-sum/solution.php';

class TwoSumTest extends TestCase
{
    public function testExample1()
    {
        $this->assertEquals([0,1], twoSum([2,7,11,15], 9));
    }

    public function testExample2()
    {
        $this->assertEquals([1,2], twoSum([3,2,4], 6));
    }
}