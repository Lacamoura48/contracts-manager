<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NotifyViewMail extends Mailable
{
    use Queueable, SerializesModels;

    public $full_name;
    public $date_opened;
    public $time_opened;
    public function __construct($full_name)
    {
        $this->full_name = $full_name;
        $this->date_opened = now()->format('Y-m-d');
        $this->time_opened =  now()->format('H:i');
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "تم فتح العقد الخاص ب$this->full_name",
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.viewMail',
            with: ['full_name' => $this->full_name, 'date_opened' => $this->date_opened, 'time_opened' => $this->time_opened]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
