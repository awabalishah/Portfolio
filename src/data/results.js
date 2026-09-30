// Client results shown in the slider on the homepage. One object per slide, in order.
//
//   period     Small label above the headline ("May 2026")
//   headline   The outcome, in one line ("155 booked appointments")
//   summary    One plain sentence of context (optional)
//   quote      Something the client said, shown in italics (optional)
//   metrics    Up to 3 numbers, each { value, label }
//   client     Who it was for. Keep it anonymous if the client hasn't agreed to be named
//   practice   Second line under the client ("Meta ads · Healthcare clinic")
//   media      Optional proof: { type: 'image', src: '/results/xyz.png', alt: '...' }
//              or { type: 'video', src: '/results/xyz.mp4' }
//              Put the files in /public/results/.
//   draft      true hides the slide on the live site (it still shows on previews).

export const results = [
    {
        period: 'May 2026',
        headline: '155 booked appointments in one month',
        summary: 'One clinic ad account. $23,789 in ad spend.',
        metrics: [
            { value: '155', label: 'Booked appointments' },
            { value: '$153.48', label: 'Cost per appointment' },
            { value: '$23.8K', label: 'Ad spend' },
        ],
        client: 'Clinic client',
        practice: 'Meta ads · Website bookings',
        media: { type: 'image', src: '/results/may-2026-155-appointments.webp', alt: 'Meta Ads Manager report for May 2026 showing 155 website schedules' },
    },
    {
        period: 'One day',
        headline: '14 bookings in a day',
        summary: 'Message from a clinic we run acquisition for.',
        quote: '14 bookings today. 3 of those were self booked. Crazy day.',
        metrics: [
            { value: '14', label: 'Bookings in one day' },
            { value: '$182', label: 'Ad spend that day' },
            { value: '$2.4K', label: 'Package sold the same day' },
        ],
        client: 'Clinic client',
        practice: 'Text message from the clinic owner',
        media: { type: 'image', src: '/results/14-bookings-in-a-day.jpg', alt: 'Text message from a clinic: 14 bookings today, 3 of those were self booked' },
    },
    {
        period: 'Nov – Dec 2025',
        headline: '89 appointments',
        summary: 'Two months of Meta ads for one clinic. $137.12 per appointment.',
        metrics: [
            { value: '89', label: 'Booked appointments' },
            { value: '$137.12', label: 'Cost per appointment' },
            { value: '$12.2K', label: 'Ad spend' },
        ],
        client: 'Clinic client',
        practice: 'Meta ads · Website bookings',
        media: { type: 'image', src: '/results/nov-dec-2025-89-appointments.webp', alt: 'Meta Ads Manager report for Nov to Dec 2025 showing 89 website schedules' },
    },
    {
        period: 'August 2025',
        headline: '54 appointments',
        summary: 'One month of Meta ads. $105.46 per appointment.',
        metrics: [
            { value: '54', label: 'Booked appointments' },
            { value: '$105.46', label: 'Cost per appointment' },
            { value: '$5.7K', label: 'Ad spend' },
        ],
        client: 'Clinic client',
        practice: 'Meta ads · Website bookings',
        media: { type: 'image', src: '/results/aug-2025-54-appointments.webp', alt: 'Meta Ads Manager report for August 2025 showing 54 website schedules' },
    },
    {
        period: 'Oct 11 – 25, 2025',
        headline: '42 online purchases in two weeks',
        summary: '$27 per purchase on $1,134 of ad spend.',
        metrics: [
            { value: '42', label: 'Website purchases' },
            { value: '$27.00', label: 'Cost per purchase' },
            { value: '$1.1K', label: 'Ad spend' },
        ],
        client: 'Clinic client',
        practice: 'Meta ads · Website purchases',
        media: { type: 'image', src: '/results/oct-2025-42-purchases.jpg', alt: 'Meta Ads Manager report for Oct 11 to 25, 2025 showing 42 website purchases' },
    },
    {
        // No screenshot yet. Add one to /public/results/ and remove `draft` to publish.
        period: 'June 2026',
        headline: '53 appointments',
        summary: 'One month of Meta ads. $119.78 per appointment.',
        metrics: [
            { value: '53', label: 'Booked appointments' },
            { value: '$119.78', label: 'Cost per appointment' },
        ],
        client: 'Clinic client',
        practice: 'Meta ads · Website bookings',
        media: null,
        draft: true,
    },
    {
        headline: 'Leads booked within two minutes, not the next morning',
        client: 'Clinic partner',
        practice: 'Verified medical practice founder',
        quote: 'The speed-to-lead system Awab implemented caught leads that used to sit in our inbox overnight. Booking them within two minutes completely solved our scheduling leakage.',
        metrics: [
            { value: '40+', label: 'Appointments recovered' },
            { value: '3.8x', label: 'Return on ad spend' },
        ],
        media: { type: 'video', src: '/VID-20260530-WA0001.mp4' },
    },
];
