<?php

class Computer
{
    public ?string $model = null;
    public ?string $operating_system = null;
    public bool $is_portable = false;
    public string $status = 'off';

    public function switchOff () 
    {
        $this->status = 'off';
    }

    public function toggleSwitch () 
    {
        $this->status = $this->status === 'on' ? 'off' : 'on';
    }
}