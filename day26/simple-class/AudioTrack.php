<?php

class AudioTrack
{
    // to get rid of the deprecation error when using DBBlackbox.php
    public ?int $id = null;
    
    public ?string $title = null;
    public ?string $author = null;
    public int $length = 0;
    public ?string $genre = null;

    public function __construct(null|string $title = null)
    {
        $this->title = $title;
    }

    public function play()
    {

    }

    public function getLengthInMinutes()
    {
        return $this->length / 60;
    }

    public function stop()
    {

    }
    
    public function next()
    {

    }
}