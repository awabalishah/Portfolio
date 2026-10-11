// Proof screenshots shown side by side in the "Client results" row. In order.
//
//   image      File in /public/results/
//   headline   Big line under the image ("155 booked appointments")
//   caption    Small line under that ("One client ad account. May 2026.")
//   alt        Short description of the image for screen readers

// May 2026 (155 appointments) is left out until the screenshot is re-exported:
// its rows match the Nov to Dec 2025 report exactly. The file is still in
// /public/results/may-2026-155-appointments.webp.
export const results = [
    {
        image: '/results/14-bookings-in-a-day.jpg',
        headline: '14 bookings in a day',
        caption: 'Message from a client we run acquisition for.',
        alt: 'Text message from a client: 14 bookings today, 3 of those were self booked',
    },
    {
        image: '/results/nov-dec-2025-89-appointments.webp',
        headline: '89 appointments',
        caption: 'Nov to Dec 2025. $137.12 each.',
        alt: 'Meta Ads Manager report for Nov to Dec 2025 showing 89 website schedules',
    },
    {
        image: '/results/aug-2025-54-appointments.webp',
        headline: '54 appointments',
        caption: 'August 2025. $105.46 each.',
        alt: 'Meta Ads Manager report for August 2025 showing 54 website schedules',
    },
    {
        image: '/results/oct-2025-42-purchases.jpg',
        headline: '42 online purchases',
        caption: 'Oct 11 to 25, 2025. $27 each.',
        alt: 'Meta Ads Manager report for Oct 11 to 25, 2025 showing 42 website purchases',
    },
    // June 2026: 53 appointments, $119.78 each. Add the screenshot to
    // /public/results/ and an entry here to show it.
];
